import React from 'react'; // eslint-disable-line no-unused-vars

const Book = props => {
  const { book } = props;
  const { thumbnail } = book.volumeInfo.imageLinks;
  const convertToHttps = link => {
    return 'https' + link.slice(4);
  };

  return (
    <div className="bookResult">
      <h3>
        <a href={book.volumeInfo.previewLink}>{book.volumeInfo.title}</a>
      </h3>
      {/* Display book information, guarding against missing info*/}
      {book.volumeInfo.authors && (
        <p className="italics">by {book.volumeInfo.authors.join(', ')}</p>
      )}

      {book.volumeInfo.imageLinks ? (
        <a href={book.volumeInfo.previewLink}>
          <img src={convertToHttps(thumbnail)} alt="thumbnail" />
        </a>
      ) : (
        <p className="grey">Image not available</p>
      )}

      {book.volumeInfo.publisher && (
        <p>Published by {book.volumeInfo.publisher}</p>
      )}
    </div>
  );
};

export default Book;
