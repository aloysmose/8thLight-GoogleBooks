import React from 'react';
import { convertToHttps } from '../utilities/utilFunctions';

const ImageLink = props => {
  const { book } = props;
  return (
    <a href={book.previewLink}>
      <img
        src={convertToHttps(book.imageLinks.thumbnail)}
        alt="book thumbnail"
      />
    </a>
  );
};

export default ImageLink;
