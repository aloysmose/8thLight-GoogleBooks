import React from 'react'; // eslint-disable-line no-unused-vars

const Book = props => {
  const { book } = props;

  return (
    <div className='bookResult'>
      <h3><a href={book.volumeInfo.previewLink}>{book.volumeInfo.title}</a></h3>
      <p>by {book.volumeInfo.authors.join(', ')}</p>
      {book.volumeInfo.imageLinks ? (
        <img src={book.volumeInfo.imageLinks.thumbnail} alt='thumbnail' />
      ) : <p>Image not available</p>}
      {book.volumeInfo.publisher && (
        <p>Published by {book.volumeInfo.publisher}</p>
      )}

    </div>
  )
}

export default Book;
