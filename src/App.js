import React, { Component } from 'react';
import './App.css';
import { Book } from './Components'
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

  async handleSubmit(event) {
    event.preventDefault();
    const { query } = this.state;
    const response = await this.handleRequest(query);
    this.setState({
      results: response.data.items,
      query: '',
    })
  }

  handleChange(event) {
    this.setState({
      query: event.target.value,
    });
  }

  async handleRequest(query) {
    let response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${this.formatQuery(query)}&startIndex=0`
    );
    return response;
  }

  render() {
    const { results } = this.state;
    return (
      <div className="App">
        <h1>Book Search</h1>
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
          { results.length ? (
            results.map( book => (
              <Book key={book.id} book={book}/>
            ))
          ) : null
          }
        </div>
      </div>
    );
  }
}

export default App;
