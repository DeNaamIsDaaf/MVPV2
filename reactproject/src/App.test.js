import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Patienterinos heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Patienterinos/i);
  expect(headingElement).toBeInTheDocument();
});