import React from 'react'; // eslint-disable-line no-unused-vars

const Book = props => {
  const { book } = props;

  return (
    <div className='bookResult'>
      <h3>
        <a href={book.volumeInfo.previewLink}>{book.volumeInfo.title}</a>
      </h3>
      <p>by {book.volumeInfo.authors.join(', ')}</p>
      {/* Check to guard against books that have no images*/}
      {book.volumeInfo.imageLinks ? (
        <a href={book.volumeInfo.previewLink}><img src={book.volumeInfo.imageLinks.thumbnail} alt='thumbnail' /></a>
      ) : <p className='grey'>Image not available</p>}
      {/* Also check for books that have no listed publisher*/}
      {book.volumeInfo.publisher && (
        <p>Published by {book.volumeInfo.publisher}</p>
      )}
    </div>
  )
}

export default Book;
