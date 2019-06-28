## Overview
Olympic games medals table


#### Functionalities:
 - Add country
 - List medals
 - Add gold, silver and bronze medals (click over number of medals)
 - Sorting by medals won (by type of medals)
 - Liquid and responsive design

#### Design decisions:
Studing some of the new features from latest React version. I've decided to use one of the new hooks called ```useReducer```. 

Since it's a small case study and there's no need to share state globally Redux is not a good fit and would over engineering the app. The use of ```useReducer``` allowed to show how I would use Redux in a real app and in the same time keep things simple, no extra configurations, no extra patterns, no class to manage local state and still similar approach to Redux. It seems to be a good option.

#### Tooling:
 - Jest + Enzyme for unit tests
 - Styled components for styles
 - CRA for bootstrapping
 - Latest React + Hooks

------

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!






