Uses Google Books' API to return information on any books you search for.

<img src="https://github.com/riccjohn/8thLight-GoogleBooks/blob/master/public/googleBooks_01.png?raw=true" />

<img src="https://github.com/riccjohn/8thLight-GoogleBooks/blob/master/public/googleBooks_02.png?raw=true" />

Created using `create-react-app`, this app mainly uses React and the Google Books API to retrieve and display data.

A form gets the user's input and creates a GET request using `axios` when the user clicks the submit button. The request specifies the query and the page index for the results to start at. The JSON response is then iterated over and handed to the `Book.js` component, which displays the data on screen. Each book in the results can links to it's listing on Google Books where the user can see more information.

The app accounts for several edge cases, like receiving an empty string as a query, and getting results back from Google with missing data. Running `npm test` will also run two test suites, one for the main component and one for the Book component. These test that the form renders correctly and updates the component's state properly, and that the Book component won't fail if given data with missing parameters.
