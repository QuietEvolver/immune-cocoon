# Learn about building .NET container images:
# https://github.com/dotnet/dotnet-docker/blob/main/samples/README.md
# MS: https://learn.microsoft.com/en-us/dotnet/core/docker/build-container?tabs=windows

## Calvin: ORIG
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
# FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build-env
# WORKDIR /source
WORKDIR /App

# copy csproj and restore as distinct layers
# COPY *.csproj .
# RUN dotnet restore --use-current-runtime
## Calvin: ORIG
COPY *.csproj ./
RUN dotnet restore
# copy and publish app and libraries
# COPY . .
COPY . ./
# RUN dotnet publish --use-current-runtime --self-contained false --no-restore -o /app
# MS: Restore as distinct layers
RUN dotnet restore
# MS: Build and publish a release
RUN dotnet publish -c Release -o out

# MS: docker counter-images
# docker build -t counter-image -f Dockerfile .

# # final stage/image
# FROM mcr.microsoft.com/dotnet/runtime:6.0
# WORKDIR /app
# COPY --from=build /app .
# ENTRYPOINT ["dotnet", "csharp.dll"]

# MS: Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:6.0
WORKDIR /App
# COPY --from=build-env /App/out .
## Calvin: ORIG
COPY --from=build /App/out .
ENTRYPOINT ["dotnet", "DotNet.Docker.dll"]

##
# Stage 1: Build the React app
# FROM node:14.17.0-alpine AS build
# WORKDIR /app
# COPY package.json package-lock.json ./
# RUN npm install
# COPY . ./
# RUN npm run build

# # Stage 2: Build and run the C# backend
# FROM mcr.microsoft.com/dotnet/sdk:5.0 AS backend
# WORKDIR /app
# COPY --from=build /app/build ./ClientApp
# COPY . ./
# RUN dotnet publish -c Release -o out
# ENTRYPOINT ["dotnet", "out/csharp.dll"]
