# Readme 

## What the app does and how to use it

This app serves to monitor changes in files provided in inbound and parse them in JSON format.

To use the app you can copy one of the data test file and put them in inbound (CSV format only). The file will be parsed in JSON format. The JSON result will be send in outbound directory and the processed csv will be send in processed when it's done. The inbound directory is then emptied.

Don't forget to run the app via the following command:

```
npm run dev
```

## Node version

You should use the v20.13.1 version of Node.

``` 
node -v // to check your version of node
```

## How to build and test the project

Babel is configured here to help you build your project.

```
npm run build // to build your project. Built files appears in dist directory
```

Jest is also used in this project to proceed tests.

```
npm run test // to run tests
```

To launch your app you can use either of these command but the better one is to run dev mode.

```
npm run start
```

```
npm run dev // this one allows you to update your code and reload the app each time
``` 

## Dependencies

For this project, you'll require few dependencies.

```
npm install --save-dev jest
```

```
npm install --save-dev @babel/core @babel/cli @babel/preset-env
```

```
npm install --save-dev @babel/node
```

```
npm install --save-dev nodemon
```

## Use Docker

Use the following command to build your container

```
docker build . -t my-exam-app
```

Notes: Don't forget to launch Docker on your desktop before doing this.

You should see the container appear when executing this command: 

```
docker image ls
```

Run your container with the following command:

```
docker run -p 3000:8081 --name my-node-app-container my-exam-app
```