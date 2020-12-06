import React from "react";
import Book, { BookObject } from "./Book";


const BookResults = (
  { allAvailableBooks }: { allAvailableBooks: BookObject[] }
) => {

  return (
    <>
      {
        allAvailableBooks.map( (book: BookObject) => (
          <Book book={book} key={book.id} />
        ))
      }
    </>
  )
}

export default BookResults;
