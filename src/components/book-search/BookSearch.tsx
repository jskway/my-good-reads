import React, { useEffect, useState } from "react";
import { getBooksByType } from "./book-search.service";
import debounce from "../../shared/debounce/debounce";

const BookSearch = (
  {setAllAvailableBooks}: {setAllAvailableBooks: Function}
) => {
  const [bookTypeToSearch, updateBookTypeToSearch] = useState("");

  async function requestBooks() {
    if (bookTypeToSearch) {
      const allBooks = await getBooksByType(bookTypeToSearch);
      setAllAvailableBooks(allBooks.items);
    }
  }

  useEffect(() => {
    async function getAllBooks() {
        await requestBooks();
    }

    debounce(getAllBooks, 500)();
  }, [bookTypeToSearch]);

  return (
    <div>
      <form
        onSubmit={(e) => {
          //debugger;
          e.preventDefault();
        }}
    >
      <input
        className="full-width"
        autoFocus
        name="gsearch"
        type="search"
        value={bookTypeToSearch}
        placeholder="Search for books to add to your reading list"
        onChange={e => {
            updateBookTypeToSearch(e.target.value)
        }}
      />
    </form>
    {!bookTypeToSearch && (
      <div className="empty">
        <p>
          Try searching for a topic, for example
          <a
            onClick={() => {
              updateBookTypeToSearch("Javascript");
            }}
          >
            {" "}
            "Javascript"
          </a>
        </p>
      </div>
    )}
    </div>
  );
};

export default BookSearch;
