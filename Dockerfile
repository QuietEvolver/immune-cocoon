# Learn about building .NET container images:
# https://github.com/dotnet/dotnet-docker/blob/main/samples/README.md
# MS: https://learn.microsoft.com/en-us/dotnet/core/docker/build-container?tabs=windows


# # Stage 1: Build the React app
# FROM node:14.17.0-alpine AS build
# WORKDIR /app
# COPY package.json package-lock.json ./
# RUN npm install
# COPY . ./
# RUN npm run build

# Stage 2: Build and run the C# backend
# FROM mcr.microsoft.com/dotnet/sdk:6.0 AS backend
# FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
# WORKDIR /app
# COPY --from=build /app/build ./ClientApp
# COPY . ./
# # Restore as distinct layers
# RUN dotnet restore

# RUN dotnet publish -c Release -o out


# ENTRYPOINT ["dotnet", "out/csharp.dll"]
FROM mcr.microsoft.com/dotnet/sdk:6.0 as build-env
WORKDIR /app
# Learn more about the "WORKDIR" Dockerfile command.

COPY ./*.csproj .
RUN dotnet restore
COPY . ./
RUN dotnet publish -c Release -o out

FROM mcr.microsoft.com/dotnet/aspnet:6.0 as runtime
WORKDIR /publish
COPY --from=build-env /publish .
ENTRYPOINT ["dotnet", "csharp.dll"]