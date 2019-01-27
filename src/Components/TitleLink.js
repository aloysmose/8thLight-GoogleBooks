import React from 'react';

const TitleLink = props => {
  const { book } = props;
  return (
    <h3>
      <a href={book.previewLink}>{book.title}</a>
    </h3>
  );
};

export default TitleLink;
