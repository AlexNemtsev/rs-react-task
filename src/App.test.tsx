import App from './App';
import userEvent from '@testing-library/user-event';
import LocalStorageMock from './__tests__/local-storage-mock';
import { vi } from 'vitest';
import LocationMock from './__tests__/location-mock';
import renderWithRouter from './__tests__/render-with-router';

beforeEach(() => {
  vi.stubGlobal('location', new LocationMock());
  vi.stubGlobal('localStorage', new LocalStorageMock());
});

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
  let searchBar = screen.getByPlaceholderText(/search\.\.\./i) as HTMLInputElement;

  const testString = '123abc';

  await userEvent.type(searchBar, testString);

  const aboutLink = screen.getByText(/about/i);
  await userEvent.click(aboutLink);
  const homeLink = await screen.findByText(/home/i);
  await userEvent.click(homeLink);

  searchBar = (await screen.findByPlaceholderText(/search\.\.\./i)) as HTMLInputElement;

  expect(searchBar.value).toBe(testString);
});
