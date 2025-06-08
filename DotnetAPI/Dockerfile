# Stage 1: build stage
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

WORKDIR /src

# restore
COPY . .
RUN dotnet restore 'DotnetAPI.csproj'


# build
WORKDIR /src/Website
COPY . .
RUN dotnet build 'DotnetAPI.csproj' -c Release -o /app/build

# stage 2: publish stage
FROM build AS publish
RUN dotnet publish 'DotnetAPI.csproj' -c Release -o /app/publish

# Stage 3: run
FROM mcr.microsoft.com/dotnet/aspnet:8.0
ENV ASPNETCORE_HTTP_PORTS=8081
ENV ASPNETCORE_ENVIRONMENT=Production
EXPOSE 8080
WORKDIR /app
COPY --from=publish /app/publish .

COPY ./Data/sqlite /home/app/datafiles

ENTRYPOINT ["dotnet", "DotnetAPI.dll"]
