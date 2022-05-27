[TOC]

# Backend Application

## Development Environment Initialization

`cd` to `backend` folder, and execute commands below:

```bash
npm install
```

## Start Application

Execute command below in `backend` folder:

```bash
npm start
```

Open `localhost:3000/api` to visit the API documentation.

## Development Tips

### Introduction

Our backend application is written by [express](https://expressjs.com/). The documentation is displayed by swagger and written by [OpenAPI 3.0](https://swagger.io/docs/specification/about/).

### File Structures

* `backend/app.js` is the configurations of all libraries.
* `backend/routes` folder holds all the API documentation and code.

# Front End Application

Please start the back-end application first.

## Development Environment Initialization

`cd` to the project root  folder, and execute commands below:

```bash
npm install
```

## Start Application

Execute command below in the root  folder:

```bash
npm start
```

If the version of Node.js is higher than v17, please execute:

```shell
NODE_OPTIONS=--openssl-legacy-provider npm start
```

Register an account first, and then, enjoy!