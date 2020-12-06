import React from "react";
import Book, { BookObject } from "./Book";


const BookResults = (
  { allAvailableBooks, readingList, setReadingList }
    : {
      allAvailableBooks: BookObject[]
      readingList: BookObject[],
      setReadingList: Function
    }
) => {

  function updateReadingList(id: String) {
    // Check if the book is in the list already
    const matches = readingList.filter(book => {
      return book.id === id;
    });

    if (matches.length === 0) {
      // Get the book object and add it to the readingList array
      const newBook = allAvailableBooks.find(book => book.id === id);
      setReadingList([...readingList, newBook]);
    }
  }

  return (
    <div onClick={(e: any) => {
      e.stopPropagation();

      // Get the id of the Book that was clicked
      const id = e.target.getAttribute('data-id');

      // If a valid Book was clicked, update the reading list
      if (id) {
        updateReadingList(id);
      }
    }}>
      {
        allAvailableBooks.map( (book: BookObject) => (
          <Book book={book} key={book.id} />
        ))
      }
    </div>
  )
}

export default BookResults;
