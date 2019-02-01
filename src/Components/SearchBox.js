import React from 'react';

const SearchBox = props => {
  const { handleSubmit, query, handleChange } = props;
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="Search-input"
        id="search"
        type="text"
        name="query"
        value={query}
        onChange={handleChange}
      />
      <button type="submit" id="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBox;
