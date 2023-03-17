import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LocalStorageMock from './local-storage-mock';
import { vi } from 'vitest';
import LocationMock from './location-mock';

const renderWithRouter = (component: JSX.Element) =>
  render(<MemoryRouter>{component}</MemoryRouter>);

beforeEach(async () => {
  globalThis.localStorage = new LocalStorageMock();
  vi.stubGlobal('location', new LocationMock());
});

// it('should call assign with a relative url', () => {
//   window.location.assign('/relative-url');
//   expect(window.location.pathname).not.toBe('/');
//   expect(window.location).toBe('/relative-url');
// });

test('Home page should be displayed', () => {
  const screen = renderWithRouter(<App />);
  const searchBar = screen.getByPlaceholderText(/search\.\.\./i);
  expect(searchBar).toBeInTheDocument();
});

test('After clicking "About" link page "About" should be displayed', async () => {
  const screen = renderWithRouter(<App />);
  const aboutLink = screen.getByText(/about/i);
  userEvent.click(aboutLink);
  const txt = await screen.findByText(/about us/i);
  expect(txt).toBeInTheDocument();
});

test('Search bar should save its value in Local Storage', async () => {
  const screen = renderWithRouter(<App />);
  let searchBar = screen.getByPlaceholderText(/search\.\.\./i);

  const testString = '123abc';

  userEvent.type(searchBar, testString);

  const aboutLink = screen.getByText(/about/i);
  await userEvent.click(aboutLink);
  const homeLink = await screen.findByText(/home/i);
  await userEvent.click(homeLink);

  searchBar = await screen.findByPlaceholderText(/search\.\.\./i);

  expect(searchBar.textContent).toBe(testString);
});
