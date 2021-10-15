import { render, screen } from '@testing-library/react';
import App from './App';

test('Check app change log', () => {
  render(<App />);
  const linkElement = screen.getByText(/Demo Application - Change log/i);
  expect(linkElement).toBeInTheDocument();
});

test('Check link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Contact/i);
  expect(linkElement).toBeInTheDocument();
});
