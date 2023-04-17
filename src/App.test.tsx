import App from './App';
import userEvent from '@testing-library/user-event';
import { test } from 'vitest';
import renderWithRouterAndRedux from '../tests/render-with-router-redux';

test('Home page should be displayed', () => {
  const screen = renderWithRouterAndRedux(<App />);
  const searchBar = screen.getByPlaceholderText(/search\.\.\./i);
  expect(searchBar).toBeInTheDocument();
});

test('All navigation links should work correctly', async () => {
  const screen = renderWithRouterAndRedux(<App />);

  const aboutLink = screen.getByText(/about/i);
  const formLink = screen.getByText(/form/i);
  const homeLink = screen.getAllByText(/home/i)[1];

  userEvent.click(aboutLink);
  const txt = await screen.findByText(/about us/i);
  expect(txt).toBeInTheDocument();

  userEvent.click(formLink);
  const btn = await screen.findByText(/submit/i);
  expect(btn).toBeInTheDocument();

  userEvent.click(homeLink);
  const searchBar = await screen.findByPlaceholderText(/search\.\.\./i);
  expect(searchBar).toBeInTheDocument();
});

test('A wrong path should lead to the 404 page', async () => {
  const screen = renderWithRouterAndRedux(<App />, ['/some-page']);
  const errorPage = await screen.findByText(/404/);
  expect(errorPage).toBeInTheDocument();
});

test('Search bar should save its value in Local Storage', async () => {
  const screen = renderWithRouterAndRedux(<App />);
  let searchBar = screen.getByPlaceholderText(/search\.\.\./i) as HTMLInputElement;

  const testString = '123abc';

  await userEvent.type(searchBar, testString);
  await userEvent.keyboard('{Enter}');

  const aboutLink = screen.getByText(/about/i);
  await userEvent.click(aboutLink);
  const homeLink = await screen.findByText(/home/i);
  await userEvent.click(homeLink);

  searchBar = (await screen.findByPlaceholderText(/search\.\.\./i)) as HTMLInputElement;

  expect(searchBar.value).toBe(testString);
});
