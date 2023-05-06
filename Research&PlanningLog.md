### Research & Planning Log
#### Friday, 05/05/2023
*

745 - Repurposing a c# project that works with personal api
830 commit 
915 - doing mongo db doc research
10  - experimenting with dotnet mvc new react, etc 
1040  research command to create a new ASP.NET Core API with React, xUnit, user authentication, using a Mongo database, and with a .gitignore file configured to use .NET 6.0 as the target framework:

$ dotnet new react -o ImmuneCocoon --auth Individual --use-https true --database MongoDB --gitignore --framework net6.0

Let's break down what each of these options does:

react: Specifies that we want to create a new React app with ASP.NET Core as the backend.
-o ImmuneCocoon: Specifies that we want to create a new project in a directory named "ImmuneCocoon".
--auth Individual: Specifies that we want to use individual user accounts for authentication.
--use-https true: Specifies that we want to use HTTPS for secure communication.
--database MongoDB: Specifies that we want to use MongoDB as our database.
--gitignore: Specifies that we want to include a .gitignore file to ignore unnecessary files in our repository.
--framework net6.0: Specifies that we want to target .NET 6.0 as our framework version.

After running this command, you will have a new project set up with an API backend using ASP.NET Core, a React frontend, xUnit for testing, user authentication, a MongoDB database, and a .gitignore file configured for .NET 6.0.

11 30 Doing more research as these commands did not work to weave a project together

1155 success on basic c# react framework

1230 made a new branch for react c prj on react-c branch

115 migrating files

2 research on api gpt
430 capstone benchmarks assessment
530 researching gpt api call(s) 
    
545 TBD  :  openai.Completion.create(
      model="text-davinci-003",
      prompt="Make a list of astronomical observatories:"
    )

    https://platform.openai.com/docs/guides/chat
    OVERVIEW: https://platform.openai.com/overview
    QA-API: https://platform.openai.com/examples/default-qa
     