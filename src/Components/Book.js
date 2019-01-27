import React from 'react';
import ImageLink from './ImageLink';
import TitleLink from './TitleLink';
import Authors from './Authors';
import Publisher from './Publisher';

const Book = props => {
  const { book } = props;

  return (
    <div className="bookResult">
      <TitleLink book={book.volumeInfo} />
      {/* Display book information, guarding against missing info*/}
      {book.volumeInfo.authors && <Authors book={book.volumeInfo} />}

      {book.volumeInfo.imageLinks ? (
        <ImageLink book={book.volumeInfo} />
      ) : (
        <p className="grey">Image not available</p>
      )}

      {book.volumeInfo.publisher && <Publisher book={book.volumeInfo} />}
    </div>
  );
};

export default Book;
