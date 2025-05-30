# Teddy Mo

dotnet ef migrations add InitialCreate
dotnet ef database update

## Git

-- sh --
git push live master
-- sh --

docker-compose -f docker-compose.inertia.yml up --build


docker-compose -f docker-compose.api.yml up --build


docker-compose -f docker-compose.api.yml build --no-cache


docker exec -it laravel-app php artisan migrate