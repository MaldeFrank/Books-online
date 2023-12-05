import React from 'react';
import { useParams } from 'react-router-dom';
import returnVal from "./BookFacade";

function BookDetails() {
  const { id } = useParams();
  const bookId = parseInt(id, 10);
  const book = returnVal.findBook(bookId);

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div>
      <p>Title: {book.title}</p>
      <p>Info: {book.info}</p>
    </div>
  );
}

export default BookDetails;
