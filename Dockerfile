# Set the base image to .NET 6 SDK
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build

# Set the working directory to /app
WORKDIR /app

# Copy the project file(s) and restore dependencies
COPY *.csproj ./
RUN dotnet restore

# Copy the remaining source code
COPY . .

# Build the application
RUN dotnet publish -c Release -o out

# Create the runtime image
FROM mcr.microsoft.com/dotnet/aspnet:6.0
WORKDIR /app
COPY --from=build /app/out .
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
