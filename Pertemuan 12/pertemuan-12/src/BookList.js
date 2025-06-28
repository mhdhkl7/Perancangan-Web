import React from 'react';
import BookItem from './BookItem';

function BookList({ books }) {
  return (
    <div className="book-grid">
      {books.map((book, index) => (
        <BookItem key={index} book={book} />
      ))}
    </div>
  );
}

export default BookList;