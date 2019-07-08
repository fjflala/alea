This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# [LIVE DEMO](https://alea-test-2e8yj8uqj.now.sh/login)

## Decisions
### First: How to start
To start the project I've decided to use Create React App as base project because it saved me a lot of time. But if I had more time I probably will made my own scaffolding and base project.

### Second: Styles
I think that the best way to show my css skills is using scss, because is the base of another things like `styled-components` for example. I also decided to use BEM as metodology.

### Three: State Managment
My first decision for the state managment was to use React Hooks, `useReducer` specifically because I think is really good to split the code into the different domains, for example: `authentication`, `users` and provide this business logic with packages so every developer of team could easily use Authentication logic or Users logic. I decided to not use it because we still have a lot of problems with the tests, so I decided to go with `Redux` and `Redux Thunk`.

### Four: Architecture
Regarding the archicture of the project, the idea is to have really clear what is the entrypoint for the different requirements and easy to find.

Pages: In this folder you'll find all the different sections or routes of the project. In some other projects you can also found it as `Containers`.

Modules: Is where all the business logic is hosted grouped by domains (Auth, Users).

Components: Components without logic that will be use by different `pages`, presentational components.

Services: Is where all the API Calls are. They are splited by domain.

Router: Is where all the routes of the app are.

## What would you do if you had more time?
If I had more time to investigate I would use React Hooks, because I think if we can have less dependencies as possible is better.
And is really easy to share reducers and make them persistent using Context Api from React also. Making tests still a chaos. 

Also if I'd more time I'll use it to make tests for the actions of redux.

## Development
````
git clone 
cd alea-test
npm i
npm start

// to run tests
npm run test
```