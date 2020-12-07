import React, { useState } from 'react';
import '../styles/App.scss';
import BookSearch from './book-search/BookSearch';
import BookResults from "./book-results/BookResults"; 
import ReadingList from "./reading-list/ReadingList";

const App = () => {
  const [ allAvailableBooks, setAllAvailableBooks ] = useState([]);
  const [ readingList, setReadingList ] = useState([]);

  return (
      <div>
        <header className="header">
          <div className="header--content">
            <h1>My Good Reads</h1>
          </div>
        </header>
        <main>
          <div className="container">
            <section className="books-container">
              <BookSearch setAllAvailableBooks={setAllAvailableBooks} />
              <BookResults
                allAvailableBooks={allAvailableBooks}
                readingList={readingList}
                setReadingList={setReadingList}
              />
            </section>
            <ReadingList
              setReadingList={setReadingList}
              readingList={readingList}
            />
          </div>
        </main>
      </div>
  );
}

export default App;
