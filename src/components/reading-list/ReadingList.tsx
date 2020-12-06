import React, { useState } from "react";
import { ReactComponent as Arrow } from "../../shared/assets/expand-arrow.svg";

const sampleList = [
  {
    id: '1',
    title: 'Book one'
  },
  {
    id: '2',
    title: 'Book two'
  }
]

const ReadingList = () => {
  const [ readingList, setReadingList ] = useState(sampleList);
  const [ isOpen, setIsOpen ] = useState(true);

  // TODO
  // handleClick was attached to the <ul> for event delegation
  // Setting the type of e to React.MouseEvent throws an error saying
  // .getAttribute does not exist on target
  // I used e.target because e.currentTarget references <ul> 
  // instead of the clicked <button>
  const handleDelete = (e: any /*React.MouseEvent*/) => {
    //const id = e.currentTarget.getAttribute('data-id');
    const id = e.target.getAttribute('data-id');
    if (id) {
      setReadingList(readingList.filter( book => book.id !== id ));
    }
  }

  const handleToggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="reading-list-container">
      <div>
        <h2>My Reading Wishlist</h2>
        <Arrow
          fill="white"
          onClick={handleToggle}
          className={`
            ${ isOpen 
              ? 'open'
              : 'closed'
            }
          `}
        />
      </div>
      <ul
        onClick={handleDelete}
        className={`${ isOpen ? 'open' : 'closed' }`}
      >
        {
          !readingList.length
            ? (
              <span>No items in reading list</span>
            )
            : (readingList.map( book => (
            <li
              key={book.id}
              className="reading-list-content"
            >
              {book.title}
              <button
                className="delete-button"
                data-id={book.id}
              >
                x
              </button>
            </li>
          )))
        }
      </ul>
    </div>
  )
}

export default ReadingList;
