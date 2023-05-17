# Learn about building .NET container images:
# https://github.com/dotnet/dotnet-docker/blob/main/samples/README.md
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /source

# copy csproj and restore as distinct layers
COPY *.csproj .
RUN dotnet restore --use-current-runtime

# copy and publish app and libraries
COPY . .
RUN dotnet publish --use-current-runtime --self-contained false --no-restore -o /app


# final stage/image
FROM mcr.microsoft.com/dotnet/runtime:6.0
WORKDIR /app
COPY --from=build /app .
ENTRYPOINT ["dotnet", "csharp.dll"]
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
