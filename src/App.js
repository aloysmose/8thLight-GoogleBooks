import React, { Component } from 'react';
import './App.css';
import { Book, PageNav } from './Components';
import {
  handleSubmit,
  handleChange,
  getNewPage,
} from './utilities/eventFunctions';

class App extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      currSearch: '',
      pageIdx: 0,
      results: [],
      resultsPerPage: 10,
    };
    this.handleSubmit = handleSubmit.bind(this);
    this.handleChange = handleChange.bind(this);
    this.getNewPage = getNewPage.bind(this);
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
          {/* Need to make sure that an array of results was returned from the API call, otherwise there was an error or no results */}
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
          <PageNav pageIdx={this.state.pageIdx} getNewPage={this.getNewPage} />
        ) : null}
      </div>
    );
  }
}

export default App;
