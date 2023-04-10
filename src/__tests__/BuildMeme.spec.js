
// import React from 'react';
// import { render, fireEvent, waitFor, screen } from '@testing-library/react';
// import BuildMeme from '../pages/BuildMeme/BuildMeme';

// describe('BuildMeme', () => {
//   let originalFetch;

//   beforeEach(() => {
//     originalFetch = global.fetch;
//     global.fetch = jest.fn(() =>
//       Promise.resolve({
//         json: () => Promise.resolve([{ url: 'https://cat-image-url' }]),
//       })
//     );
//   });

//   afterEach(() => {
//     global.fetch = originalFetch;
//   });

//   test('renders cat and dog meme creators', async () => {
//     render(<BuildMeme />);
//     const catMemeCreator = screen.getByText('Cat Meme generator');
//     const dogMemeCreator = screen.getByText('Dog Meme generator');
//     expect(catMemeCreator).toBeInTheDocument();
//     expect(dogMemeCreator).toBeInTheDocument();
//   });

//   test('fetches cat image and quote on mount', async () => {
//     render(<BuildMeme />);
//     await waitFor(() => {
//       expect(global.fetch).toHaveBeenCalledTimes(2);
//       expect(global.fetch).toHaveBeenCalledWith(
//         'https://api.thecatapi.com/v1/images/search'
//       );
//       expect(global.fetch).toHaveBeenCalledWith(
//         'https://ron-swanson-quotes.herokuapp.com/v2/quotes'
//       );
//       const catImage = screen.getByAltText('Cat');
//       const catQuote = screen.getByText('Ron Swanson Quote');
//       expect(catImage).toBeInTheDocument();
//       expect(catQuote).toBeInTheDocument();
//     });
//   });

//   test('fetches dog image and quote on button click', async () => {
//     global.fetch.mockImplementationOnce(() =>
//       Promise.resolve({
//         json: () => Promise.resolve([{ url: 'https://dog-image-url' }]),
//       })
//     );
//     render(<BuildMeme />);
//     const newDogButton = screen.getByText('New Dog');
//     fireEvent.click(newDogButton);
//     await waitFor(() => {
//       expect(global.fetch).toHaveBeenCalledTimes(3);
//       expect(global.fetch).toHaveBeenCalledWith(
//         'https://api.thedogapi.com/v1/images/search'
//       );
//       const dogImage = screen.getByAltText('Dog');
//       const dogQuote = screen.getByText('Ron Swanson Quote');
//       expect(dogImage).toBeInTheDocument();
//       expect(dogQuote).toBeInTheDocument();
//     });
//   });

//   test('fetches new quote on button click', async () => {
//     global.fetch.mockImplementationOnce(() =>
//       Promise.resolve({
//         json: () =>
//           Promise.resolve({ value: 'Chuck Norris Quote' }),
//       })
//     );
//     render(<BuildMeme />);
//     const newQuoteButton = screen.getByText('New Quote');
//     fireEvent.click(newQuoteButton);
//     await waitFor(() => {
//       expect(global.fetch).toHaveBeenCalledTimes(3);
//       expect(global.fetch).toHaveBeenCalledWith(
//         'https://api.chucknorris.io/jokes/random'
//       );
//       const quote = screen.getByText('Chuck Norris Quote');
//       expect(quote).toBeInTheDocument();
//     });
//   });
// });
