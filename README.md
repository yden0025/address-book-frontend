# Getting Started with Address Book Application

The UI is more aligned with an actual application with CURD. However, since the time is limited, only the create features and view features are implemented.

## Assumption

#### Book

1. The names of books are all unique with 1-100 chars.
2. The descriptions of books are optional.

#### Contact

1. For all contacts, the name can be duplicated.
2. For the contacts in each book, the name must be unique.

3. If we view the contacts in each book, the `Unique` field means whether the contact is only available in current book.
4. The descriptions of contacts are optional.

## Front end

This front end application was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the `Address Book`, you can run:

### `npm install`

Install all the dependencies.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.



### Back end

The database used in this application is mongoDB, so make sure it is installed locally if you want to run this application on the localhost.

In the `backend`, you can run:

### `npm install`

Install all the dependencies.

### `nodemon app.js`

Runs the app in the development mode.\
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

