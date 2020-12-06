import React, { useState } from 'react';
import '../styles/App.scss';
import BookSearch from './book-search/BookSearch';
import BookResults from "./book-results/BookResults"; 

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
          <BookSearch setAllAvailableBooks={setAllAvailableBooks} />
          <BookResults allAvailableBooks={allAvailableBooks} />
        </main>

      </div>
  );
}

export default App;
