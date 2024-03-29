
# Immune Cocoon 
## An Allergen & Immunology Log

#### By Vera Weikel 

#### This is a project to build a Web Application using ASP .Net, MVC, Identity, and database.

## SetUp
Open your terminal and clone this [repo](https://github.com/QuietEvolver/immune-cocoon.git) to desired local folder.
Navigate to root file. 
To run the Serverside, stay in the folder and type: 
```
  $ dotnet run
```
To run the Client side, navigate to the ClientApp folder and type: 
```
  $ npm run start
```
## User Flow

![Business BDD](ClientApp/src/assets/images//figma-user-flow.jpeg "figma-user-flow")

## Technologies Used
<!-- * $ dotnet add Standard.AI.OpenAI ( C# ) -->
* Javascript
* Pagination
* Swagger
* C#
* React
* JSX
* HTML
* CSS
* .Net 6 SDK
* EFCore
* ASP.Net
* Render
* Railway
* Docker
* Identity
* Postman
* Figma

## Description

This C# web app project uses Identity ASP.NET Core with a ReactJS user interface. 

## Goals/Objectives

This app helps clients and businesses track individual allergies.

## How To Run This Project

If you have not already, install the .NET Entity Framework tool(s) by running the following command in your terminal:

```
dotnet tool install --global 

dotnet-ef --version 6.0.0
```

### Set Up and Run Project

1. Clone this repo.
2. Open the terminal and navigate to this project's production directory called "ToDoList".
3. Within the production directory "ToDoList", create a new file called `appsettings.json`.
4. Within `appsettings.json`, put in the following code, replacing the `uid` and `pwd` values with your own username and password for MySQL. For the LearnHowToProgram.com lessons, we always assume the `uid` is `root` and the `pwd` is `epicodus`.

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Port=3306;database=to_do_list_with_auth;uid=root;pwd=epicodus;"
  }
}
```

5. Create the database using the migrations in the To Do List project. Open your shell (e.g., Terminal or GitBash) to the production directory "ToDoList", and run `dotnet ef database update`. 
    - To optionally create a migration, run the command `dotnet ef migrations add MigrationName` where `MigrationName` is your custom name for the migration in UpperCamelCase. To learn more about migrations, visit the LHTP lesson [Code First Development and Migrations](https://www.learnhowtoprogram.com/c-and-net-part-time/many-to-many-relationships/code-first-development-and-migrations).
6. Within the production directory "ToDoList", run `dotnet watch run` in the command line to start the project in development mode with a watcher.
4. Open the browser to _https://localhost:5001_. If you cannot access localhost:5001 it is likely because you have not configured a .NET developer security certificate for HTTPS. To learn about this, review this lesson: [Redirecting to HTTPS and Issuing a Security Certificate](https://www.learnhowtoprogram.com/lessons/redirecting-to-https-and-issuing-a-security-certificate).

## Database Instructions 

* In your terminal type to create a db migration: $ dotnet ef migrations add Initial
* Updating the Database with the Migration: $ dotnet ef database update

## DB (Optional)

* If you would like to see a current view of the database: Open SQL workbench.
* Navigate to the "Administration" tab in SQL Workbench.
* Click "Schema" 
* Right hand mouse click "Refresh All".
* The _Name the schema "project_name" of the database in this current project will be in view

## Known Bugs

* Railway deployment JS/C# engine

## License

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Copyright (c) 2023 Vera Weikel 

