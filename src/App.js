import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  formatQuery(input) {
    return input
      .toLowerCase()
      .split(' ')
      .join('+');
  }

  handleSubmit(event) {
    event.preventDefault();
    const { query } = this.state;
    console.log(this.formatQuery(query));
    this.setState({
      query: '',
    });
  }

  handleChange(event) {
    this.setState({
      query: event.target.value,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Search</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="query">Search:</label>
          <input
            type="text"
            name="query"
            value={this.state.query}
            onChange={this.handleChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default App;
