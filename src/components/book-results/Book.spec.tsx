import React from "react";
import { render } from "@testing-library/react";
import Book from "./Book";

describe("Book tests", () => {
  const dummyBook = {
    id: '123',
    volumeInfo: {
      title: 'Awesome Book',
      authors: ['Author 1', 'Author 2'],
      description: 'I am a book!',
      publisher: 'Greatest publisher of all time',
      publishedDate: '3041-11-11',
      imageLinks: {
        thumbnail: 'https://source.unsplash.com/random/200x300'
      }
    }
  }

  test("It renders book data", () => {
    const { getByText, getAllByText, getByAltText } = render(<Book book={dummyBook} />);

    const thumbnail =  getByAltText(/awesome book/i);
    const titleEl =  getByText(/awesome book/i);
    const author =  getByText(/author 1/i);
    const publisherEl =  getByText(/greatest publisher of all time/i);
    const dateEl = getByText(/3041-11-11/i);
    const descriptionEl = getByText(/i am a book/i);

    expect(thumbnail).toBeInTheDocument();
    expect(titleEl).toBeInTheDocument();
    expect(author).toBeInTheDocument();
    expect(publisherEl).toBeInTheDocument();
    expect(dateEl).toBeInTheDocument();
    expect(descriptionEl).toBeInTheDocument();
  });
});
