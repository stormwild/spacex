# SpaceX Launches

A React TypeScript GraphQL application that displays SpaceX launches.

## Demo

[Demo](build)

## Pre-requisites

- NodeJs, NPM, Yarn
- Visual Studio Code

## Setup

Initialize the application

```sh
npx create-react-app spacex --template=typescript
```

Add GraphQL dependencies

> Now we can install our additional dependencies. Our app will use Apollo to execute GraphQL API requests. The libraries needed for Apollo are `apollo-boost`, `react-apollo`, `react-apollo-hooks`, `graphql-tag`, and `graphql`.
>
> `apollo-boost` contains the tools needed to query the API and cache data locally in memory; `react-apollo` provides bindings for React; `react-apollo-hooks` wraps Apollo queries in a React Hook; `graphql-tag` is used to build our query documents; and `graphql` is a peer dependency that provides details of the GraphQL implementation.

```sh
yarn add apollo-boost react-apollo react-apollo-hooks graphql-tag graphql
```

> `graphql-code-generator` is used to automate our TypeScript workflow. We will install the codegen CLI to generate the configuration and plugins we need.

```sh
yarn add -D @graphql-codegen/cli
```

Setup codegen configuration

```sh
npx graphql-codegen init
```

```
src/**/*.{ts,tsx}
src/**/*.{ts,tsx,gql,graphql}
```

Output

```sh
$ npx graphql-codegen init

    Welcome to GraphQL Code Generator!
    Answer few questions and we will setup everything for you.

? What type of application are you building? Application built with React
? Where is your schema?: (path or url) https://spacexdata.herokuapp.com/graphql
? Where are your operations and fragments?: src/**/*.{ts,tsx,gql,graphql}
? Pick plugins: TypeScript (required by other typescript plugins), TypeScript Operations (operations and fragments), TypeScript React Apollo (typed components and HOCs)
? Where to write the output: src/generated/graphql.tsx
? Do you want to generate an introspection file? No
? How to name the config file? codegen.yml
? What script in package.json should run the codegen? codegen

    Config file generated at codegen.yml

      $ npm install

    To install the plugins.

      $ npm run codegen

    To run GraphQL Code Generator.



```

## References

- [Build a GraphQL + React App with TypeScript - Create a React app from scratch using TypeScript that calls the SpaceX GraphQL API](https://levelup.gitconnected.com/build-a-graphql-react-app-with-typescript-9661f908b26)
