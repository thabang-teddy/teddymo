using DotnetAPI.Data;
using DotnetAPI.Models;
using DotnetAPI.Repository;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

try
{

    var builder = WebApplication.CreateBuilder(args);

    // Add services to the container.
    builder.Services.AddControllers();

    // Build full database path from connection string
    var rawDbPath = builder.Configuration.GetConnectionString("DefaultConnection")!
        .Replace("Data Source=", "").Trim();

    // Ensure directory exists
    var dbDirectory = Path.GetDirectoryName(rawDbPath);
    if (!string.IsNullOrEmpty(dbDirectory))
    {
        Directory.CreateDirectory(dbDirectory);
    }

    // Rebuild connection string with absolute path
    var dbPath = Path.GetFullPath(rawDbPath);
    var connectionString = $"Data Source={dbPath}";

    // Register services
    builder.Services.AddDbContext<ApplicationDbContext>(options =>
        options.UseSqlite(connectionString));

    builder.Services.AddIdentity<ApplicationUser, IdentityRole>()
        .AddEntityFrameworkStores<ApplicationDbContext>()
        .AddDefaultTokenProviders();

    builder.Services.ConfigureApplicationCookie(options => {
        options.LoginPath = $"/Account/Auth/Login";
        options.LogoutPath = $"/Account/Auth/Logout";
        options.AccessDeniedPath = $"/Account/Auth/AccessDenied";
    });

    builder.Services.AddScoped<IContactRepository, ContactRepository>();
    builder.Services.AddScoped<IExperienceRepository, ExperienceRepository>();
    builder.Services.AddScoped<IPortfolioRepository, PortfolioRepository>();

    builder.Services.AddAutoMapper(typeof(Program));

    builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddSwaggerGen();

    var app = builder.Build();

    // Migrate DB on startup
    using (var scope = app.Services.CreateScope())
    {
        var services = scope.ServiceProvider;
        try
        {
            if (!File.Exists(dbPath))
            {
                File.Create(dbPath).Dispose(); // Creates file and closes it
                Console.WriteLine("Created empty SQLite DB file.");
            }

            var context = services.GetRequiredService<ApplicationDbContext>();
            context.Database.Migrate();

            Console.WriteLine("SQLite database has connected and is responding.");
        }
        catch (Exception ex)
        {
            Console.WriteLine("SQLite database connection failed: " + ex.Message);
            throw;
        }
    }

    // Configure the HTTP request pipeline.
    if (app.Environment.IsDevelopment())
    {
        app.UseSwagger();
        app.UseSwaggerUI();
    }

    app.UseHttpsRedirection();

    app.UseRouting();

    app.UseAuthorization();

    app.MapControllerRoute(
        name: "default",
        pattern: "{area=Visitor}/{controller=Home}/{action=Index}/{id?}");

    app.Run();

}
catch (Exception ex)
{
    // Log the error or handle it (optional)
    Console.WriteLine("Database migration failed: " + ex.Message);
    throw;

}