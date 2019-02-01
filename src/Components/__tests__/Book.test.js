import React from 'react';
import { shallow } from 'enzyme';
import Book from '../Book';

const book1 = {
  id: 'kz8JPwAACAAJ',
  volumeInfo: {
    authors: ['Margaret Weis', 'Tracy Hickman'],
    imageLinks: {
      thumbnail:
        'http://books.google.com/books/content?id=kz8JPwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    },
    previewLink:
      'http://books.google.com/books?id=kz8JPwAACAAJ&dq=dragonlance&hl=&cd=1&source=gbs_api',
    title: 'Dragons of Autumn Twilight',
    publisher: 'Wizards of the Coast',
  },
};

const book2 = {
  id: 'kz8JPwAACAAJ',
  volumeInfo: {
    authors: ['Margaret Weis'],
    previewLink:
      'http://books.google.com/books?id=kz8JPwAACAAJ&dq=dragonlance&hl=&cd=1&source=gbs_api',
    title: 'Dragons of Autumn Twilight',
  },
};

describe('Book Component', () => {
  it('should render without throwing an error', () => {
    expect(
      shallow(<Book key={book1.id} book={book1} />)
        .find('div.bookResult')
        .exists()
    ).toBe(true);
  });

  it('should render books with missing information without throwing an error', () => {
    expect(
      shallow(<Book key={book2.id} book={book2} />)
        .find('div.bookResult')
        .exists()
    ).toBe(true);
  });
});
