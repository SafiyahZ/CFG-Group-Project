import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Dogs from './Dogs';

describe('Dogs', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('renders the component', () => {
    render(<Dogs />);
    expect(screen.getByText('Dogs')).toBeInTheDocument();
  });

  it('fetches dog data and displays it', async () => {
    fetch.mockResponseOnce(
      JSON.stringify([
        { id: 1, name: 'Dog 1', bred_for: 'Bred for 1', image: { url: 'http://dog1.com' } },
        { id: 2, name: 'Dog 2', bred_for: 'Bred for 2', image: { url: 'http://dog2.com' } },
      ])
    );

    const { getByText } = render(<Dogs />);
    await waitFor(() => expect(fetch.mock.calls.length).toBe(1));

    expect(getByText('Dog 1')).toBeInTheDocument();
    expect(getByText('Dog 2')).toBeInTheDocument();
    expect(getByText('Bred for: Bred for 1')).toBeInTheDocument();
    expect(getByText('Bred for: Bred for 2')).toBeInTheDocument();
  });

  it('searches for a dog breed', async () => {
    fetch.mockResponseOnce(
      JSON.stringify([{ id: 1, name: 'Dog 1', bred_for: 'Bred for 1', image: { url: 'http://dog1.com' } }])
    );

    const { getByText, getByPlaceholderText } = render(<Dogs />);
    const searchInput = getByPlaceholderText('Search for a dog breed');
    fireEvent.change(searchInput, { target: { value: 'Dog 1' } });
    fireEvent.submit(searchInput);

    await waitFor(() => expect(fetch.mock.calls.length).toBe(1));

    expect(getByText('Dog 1')).toBeInTheDocument();
    expect(getByText('Bred for: Bred for 1')).toBeInTheDocument();
  });
});
