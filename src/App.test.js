import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/AWS CI\/CD Demo - Sample/i);
  expect(linkElement).toBeInTheDocument();
});
