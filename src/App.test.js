// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ArtLedger title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ArtLedger/i);
    expect(titleElement).toBeInTheDocument();
});
