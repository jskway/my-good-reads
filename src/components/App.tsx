import React, { useState } from 'react';
import '../styles/App.scss';
import BookSearch from './book-search/BookSearch';
import BookResults from "./book-results/BookResults"; 
import ReadingList from "./reading-list/ReadingList";

function App() {

  const [allAvailableBooks, setAllAvailableBooks] = useState([]);

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
              <BookResults allAvailableBooks={allAvailableBooks} />
            </section>
            <ReadingList />
          </div>
        </main>
      </div>
  );
}

export default App;
