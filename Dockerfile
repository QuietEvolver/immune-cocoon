# Stage 1: Build the React app
FROM node:14.17.0-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build

# Stage 2: Build and run the C# backend
FROM mcr.microsoft.com/dotnet/sdk:5.0 AS backend
WORKDIR /app
COPY --from=build /app/build ./ClientApp
COPY . ./
RUN dotnet publish -c Release -o out
ENTRYPOINT ["dotnet", "out/csharp.dll"]
