# Frontend Award with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

*note this project depends on award-api so make sure award api already running`

## Installation

- Run command `yarn` or `npm i`
```bash
yarn
```
- Create `.env` file from `.env.example`

## .env
- `PORT`: app port
- `REACT_APP_API_URL`: api url external (award-api)

## Run project 
- Start app `$ yarn start` or `$ npm run start`
```bash
yarn start
```
- Build project `$ yarn build` or `$ npm run build`
```bash
yarn build
```

### Run project using docker-compose
- Start app `$ docker-compose up -d` the containers will run in the background and not display logs in terminal if want to see the logs in terminal just start app without flag `-d` like this `$ docker-compose up`
```bash
docker-compose up
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

if you got ERROR: Couldn't connect to Docker. Try with `sudo`

## Note
- This app depends on award-api if the award-api already run we can use the user data that I initiated for testing, we can use email `test@member.id` for Sign In

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
