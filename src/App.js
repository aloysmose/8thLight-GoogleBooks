import React, { Component } from 'react';
import './App.css';
import { Book } from './Components';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      results: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // format query properly for URI
  formatQuery(input) {
    return input
      .toLowerCase()
      .split(' ')
      .join('+');
  }
  // Grab results from Google Books API using the user-input query, then put the results on state and clear the query field
  async handleSubmit(event) {
    event.preventDefault();
    const { query } = this.state;

    const response = await this.handleRequest(query);

    this.setState({
      results: response,
      query: '',
    });
  }

  // Update state every time the input value changes
  handleChange(event) {
    this.setState({
      query: event.target.value,
    });
  }

  async handleRequest(query) {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${this.formatQuery(
          query
        )}&startIndex=0`
      );

      /*  Only return the actual items, this way if there's an error, the handleSubmit function won't be trying to grab .data.items off an object that doens't exist*/

      return response.data.items;
    } catch (error) {
      return 'error';
    }
  }

  render() {
    const { results } = this.state;
    return (
      <div className="App">
        <h1>Find your next book</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="query"
            value={this.state.query}
            onChange={this.handleChange}
          />
          <button type="submit">Search</button>
        </form>
        {/* Displays book results as long as there are results on state*/}
        <div className="results">
          {/* Make sure that there is an array of results, otherwise it means there were no results sent back */}
          {Array.isArray(results) ? (
            results.map(book => <Book key={book.id} book={book} />)
          ) : (
            <p className="grey">'No matching results. Try again.'</p>
          )}
        </div>
      </div>
    );
  }
}

export default App;
