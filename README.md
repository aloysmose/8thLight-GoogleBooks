Uses Google Books' API to return information on any books you search for.

<img src="https://github.com/riccjohn/8thLight-GoogleBooks/blob/master/public/googleBooks_01.png?raw=true" />

<img src="https://github.com/riccjohn/8thLight-GoogleBooks/blob/master/public/googleBooks_02.png?raw=true" />

---

### About this app

Created using `create-react-app`, this app mainly uses React and the Google Books API to retrieve and display data.

A form gets the user's input and creates a GET request using `axios` when the user clicks the submit button. The request specifies the query and the page index for the results to start at. The JSON response is then iterated over and handed to the `Book.js` component, which displays the data on screen. Each book in the results can links to it's listing on Google Books where the user can see more information.

The app accounts for several edge cases, like receiving an empty string as a query, and getting results back from Google with missing data. Running `npm test` will also run two test suites, one for the main component and one for the Book component. These test that the form renders correctly and updates the component's state properly, and that the Book component won't fail if given data with missing parameters.

---

### Running locally

1. Install Node and NPM if you don't have it on your machine. You can download them [here](https://www.npmjs.com/get-npm).

2. Clone this repository:

```
git clone git@github.com:riccjohn/8thLight-GoogleBooks.git
```

3. Change directories to `8thLight-GoogleBooks` and install dependencies:

```
cd 8thLight-GoogleBooks
npm install

```

4. Start the server:

```
npm start
```

The page should automatically open in your default web browser. If it doens't open on it's own, just go to `http://localhost:3000/` in your web browser.

---

### Testing

Two test suites are included. One to test that the `App` component renders correctly and updates state when characters are input into the search box, and one suite to test the `Book` component. This second suite tests that the `Book` component makes use of it's sub-components and renders correctly given a few edge cases.

To run the tests, make sure you're in the application directory, and start the tests with:

```
npm test
```

You may need to hit `a` after this to run all the tests. If you're changing any code, the tests should run automatically, but if you want to make sure, you can hit `w` and then press `Enter` to trigger a new test run.
