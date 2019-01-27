import React from 'react';

const Publisher = props => {
  const { book } = props;
  return <p>Published by {book.publisher}</p>;
};

export default Publisher;
