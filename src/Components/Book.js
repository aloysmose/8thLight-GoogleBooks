import React from 'react'; // eslint-disable-line no-unused-vars

const Book = props => {
  const { book } = props;

  return (
    <div className='bookResult'>
      <h3>{book.volumeInfo.title}</h3>
      <p>by {book.volumeInfo.authors.join(', ')}</p>
      {book.volumeInfo.imageLinks ? (
        <img src={book.volumeInfo.imageLinks.thumbnail} alt='thumbnail' />
      ) : <p>Image not available</p>}      
    </div>
  )
}

export default Book;
