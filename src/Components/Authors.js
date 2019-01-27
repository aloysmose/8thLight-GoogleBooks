import React from 'react';

const Authors = props => {
  const { book } = props;
  return <p className="italics">by {book.authors.join(', ')}</p>;
};

export default Authors;
