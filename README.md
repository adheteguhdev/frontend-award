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

## License
[MIT](https://choosealicense.com/licenses/mit/)