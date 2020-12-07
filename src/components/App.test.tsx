import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from "react-dom/test-utils";
import App from './App';
import { getBooksByType } from "./book-search/book-search.service";

jest.mock('./book-search/book-search.service');
jest.useFakeTimers();

const mockResponse = { 
  items: [
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
}


describe('App', () => {
  afterEach(() => {
    jest.clearAllTimers();
  });

  test('renders header', () => {
    const { getByText } = render(<App />);
    const header = getByText(/my good reads/i);
    expect(header).toBeInTheDocument();
  });

  test('typing into the searchbar updates BookResults', async () => {
    const mockGetBooksByType = getBooksByType as jest.MockedFunction<typeof getBooksByType>;

    mockGetBooksByType.mockResolvedValue(mockResponse);

    const { getByText, getByPlaceholderText } = render(<App />);
    
    const input = getByPlaceholderText(/search for books to add/i);
    expect(input).toBeInTheDocument();

    act(() => {
      userEvent.type(input, 'test')
    });

    jest.advanceTimersByTime(1000);

    expect(mockGetBooksByType).toHaveBeenCalled();

    //TODO
    // Finish debugging this test

    //const book = getByText(/awesome book/i);

  });

  test('Books can be added to the wishlist', () => {
    // TODO
  });
});
