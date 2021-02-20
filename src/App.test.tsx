import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders element with text', () => {
  render(<App />);
  const linkElement = screen.getByText(/this is/i);
  expect(linkElement).toBeTruthy();
});