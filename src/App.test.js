import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Anime Verse title', () => {
  render(<App />);
  const titleElement = screen.getByText(/ANIME VERSE/i);
  expect(titleElement).toBeInTheDocument();
});