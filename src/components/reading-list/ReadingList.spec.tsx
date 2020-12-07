import React from "react";
import { render, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ReadingList from "./ReadingList";
import { BookObject } from "../book-results/Book";

describe("ReadingList test", () => {
  let dummyList = [
    {
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
  ]

  const setDummyList = (arr: BookObject[] | []) => {
    dummyList = arr;
  }

  test("renders the heading", () => {
    const { getByText } = render(
      <ReadingList
        readingList={dummyList}
        setReadingList={setDummyList}
      />
    );

    const heading = getByText(/my reading wishlist/i);
    expect(heading).toBeInTheDocument();
  });

  test("renders a message if the list is empty", () => {
    const { getByText } = render(
      <ReadingList
        readingList={[]}
        setReadingList={setDummyList}
      />
    );

    const message = getByText(/no items in reading list/i);
    expect(message).toBeInTheDocument();
  });

  test("renders books in the list if it's not empty", () => {
    const { getByText } = render(
      <ReadingList
        readingList={dummyList}
        setReadingList={setDummyList}
      />
    );

    const book = getByText(/awesome book/i);

    expect(book).toBeInTheDocument();
  });

  test("clicking the arrow icon toggles the list", () => {
    const { getByRole } = render(
      <ReadingList
        readingList={dummyList}
        setReadingList={setDummyList}
      />
    );

    const arrow = getByRole(/icon/i);
    const list = getByRole('list');

    expect(arrow).toBeInTheDocument();
    expect(list).toBeInTheDocument();

    expect(Array.from(list.classList)).toContain('open');

    userEvent.click(arrow);

    expect(Array.from(list.classList)).not.toContain('open');
  });

  test("clicking the x icon removes the item from the list", async () => {
    let dummyList = [
        {
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
    ]

    const setDummyList = (arr: BookObject[] | []) => {
      dummyList = arr;
    }

    const { getByText, getByTestId } = render(
      <ReadingList
        readingList={dummyList}
        setReadingList={setDummyList}
      />
    );

    const deleteBtn = getByTestId('123');

    expect(dummyList).toHaveLength(1);

    userEvent.click(deleteBtn);

    expect(dummyList).toHaveLength(0);
  });
});
