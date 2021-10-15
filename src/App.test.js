import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Demo Application - Change log/i);
  expect(linkElement).toBeInTheDocument();
});
