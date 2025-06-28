import React from 'react';

function BookItem({ book }) {
  const imageUrl = `${process.env.PUBLIC_URL}/${book.image}`;

  return (
    <div className="book-item">
      <img src={imageUrl} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>{book.publisher}</p>
    </div>
  );
}

export default BookItem;