import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const renderWithRouter = (component: JSX.Element) =>
  render(<MemoryRouter>{component}</MemoryRouter>);

test('Home page should be displayed', () => {
  const { getByText } = renderWithRouter(<App />);
  const carfElement = getByText(/iphone 9/i);
  expect(carfElement).toBeInTheDocument();
});

test('After clicking "About" link page "About" should be displayed', async () => {
  const screen = renderWithRouter(<App />);
  const aboutLink = screen.getByText(/about/i);
  userEvent.click(aboutLink);
  const txt = await screen.findByText(/about us/i);
  expect(txt).toBeInTheDocument();
});
