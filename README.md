# A simple webpack config to use as template for projects

### 1. Create two separate .env files in the root directory
For dev `.env.development` with the following line `NODE_ENV=development`
For production `.env.production` with the following line `NODE_ENV=production`

These will differenciate the webpack processes depending on the environment 

You can add add additional variables that will be passed in your react project as well. 

### 2. Install the node modules 
run `npm install` 

### 3. Starting the dev mode
run `npm start`

### 4. Build the project 
run `npm run build` 

The project has some basic linting scripts and a few additional options to run an http-server to run the final build



