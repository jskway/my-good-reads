import React from "react";

export interface VolumeInfoObject {
  title: string,
  authors: string[],
  description: string,
  publisher: any,
  publishedDate: string,
  imageLinks: {
    thumbnail: string
  }
}

export interface BookObject {
  id: string;
  volumeInfo: VolumeInfoObject;
}

const Book = ({ book } : { book: BookObject }) => {
  const { id, volumeInfo } = book;
  const { title, authors, description, publisher, publishedDate, imageLinks } = volumeInfo;

  return (
    <article className="book">
      <img src={imageLinks.thumbnail} alt={title} />
      <h5>{title}</h5>
      <p className="book--authors">
        By{" "} 
      {
        authors.map( (author: string, idx: number) => {
          return idx === authors.length - 1
            ? `${author}`
            : `${author}, `
        })
      }
      </p>
      <p className="book--publisher">
        Published by {
          publisher?.replaceAll(`"`, ``)
        } <span>[{publishedDate}]</span>
      </p>
      <p className="book--description">{description}</p>
      <button
        data-id={id}
      >Add to wishlist</button>
    </article>
  )
}

export default Book;
