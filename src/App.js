import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { Book } from './Components';
import { formatQuery } from './utilities/utilFunctions';

class App extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      currSearch: '',
      pageIdx: 0,
      results: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getNewPage = this.getNewPage.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { query } = this.state;
    const response = await this.handleRequest(query, 0);
    this.setState({
      results: response,
      query: '',
      currSearch: query,
      pageIdx: 0,
    });
  }

  handleChange(event) {
    this.setState({
      query: event.target.value,
    });
  }

  async getNewPage(direction) {
    let pageDiff;
    direction === 'next' ? (pageDiff = 1) : (pageDiff = -1);
    const newIdx = this.state.pageIdx + pageDiff;
    const query = this.state.currSearch;
    const response = await this.handleRequest(query, newIdx);
    this.setState({
      pageIdx: newIdx,
      results: response,
    });
    window.scrollTo(0, 0);
  }

  async handleRequest(query, idx) {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${formatQuery(
          query
        )}&startIndex=${idx}`
      );
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
            id="search"
            type="text"
            name="query"
            value={this.state.query}
            onChange={this.handleChange}
          />
          <button type="submit" id="submit">
            Search
          </button>
        </form>
        <div className="results">
          {Array.isArray(results) ? (
            <React.Fragment>
              {results.length ? (
                <h3>Results for '{this.state.currSearch}'</h3>
              ) : null}
              {results.map(book => (
                <Book key={book.id} book={book} />
              ))}
            </React.Fragment>
          ) : (
            <p className="grey">'No matching results. Try again.'</p>
          )}
        </div>
        {Array.isArray(results) && results.length ? (
          <div id="pageNav">
            {this.state.pageIdx !== 0 ? (
              <button
                id="prev"
                onClick={() => {
                  this.getNewPage('prev');
                }}
              >
                Back
              </button>
            ) : null}

            <button
              id="next"
              onClick={() => {
                this.getNewPage('next');
              }}
            >
              Next
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
