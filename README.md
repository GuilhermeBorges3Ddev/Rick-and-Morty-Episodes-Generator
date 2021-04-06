# Rick and Morty - The episodes generator

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

List of technologies that i used:

- ✨React.js  +   ApolloClient
- ✨Redux
- ✨SASS
- ✨Prettier and EsLint
- ✨Antd Components and Reactstrap


## How to run my app:

Use `npm install` on the root folder to install the necessary dependencies, or if you wanna use [Yarn](https://https://classic.yarnpkg.com/en/docs/install/) to run. After these initial config type the following steps bellow(i'll use Yarn in the following code):

```sh
cd src/
yarn start
```

## Available routes:
I discribed on the next table the routes what are on the app, and on right side we'll see a little brief of the content inside these routes:

| Routes | Description |
| ------ | ------ |
| http://localhost:3000/ | Basically the main page, has two buttons, one to create a episode and other to see the the historic of created episodes.  |
| http://localhost:3000/new-episode | Has two inputs on this page, one to set the number of characters and other to set the number of locales, on the footer zone has a alert that blocks the creation if you set zero characters or zero locales. |
| http://localhost:3000/episodes | Here is the page of retrive the episodes created. |
| http://localhost:3000/[ANY_THING] | After the "/" if you digit some route that don't exists i made a special route to treat this error. |

## Concepts applyed on structure:
Explainning the archteture of folders:

> **assets/** - Separates images and syles to the other logical parts
> 
> **components/** - Each page represents a route and has his JSX with his own SASS, like a organic separation, inspired by the DDD pattern
> 
> **App.jsx** - Isolates the core funcs, with router-dom and a <Provider> to Redux
> 
> **services/** - Contains the ApolloCli calls, but can be added Axios and other external service like validators
> 
> **store** - Just a index.js to isolate the state-data of Redux
> 
> **.eslint and .prettierrc** - They are combined to create a pattern for tabulation and organizes all app

Look the picture that gives a visual idea of how those concepts are apllyed:
....

## Snippet of the interface:

If you consider the app, just clone and run:

```sh
gggg
```

***@GuilhermeBorges3Ddev <2021>***
