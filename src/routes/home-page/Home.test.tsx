import { it, test, describe } from 'vitest';
import renderWithRouterAndRedux from '../../../tests/render-with-router-redux';
import Home from './Home';
import photosMock from '../../../tests/tests-data/photos';

test('Before app fetch data page shows "Loading"', () => {
  const screen = renderWithRouterAndRedux(<Home />);
  const indicator = screen.getByText(/loading/i);
  expect(indicator).toBeInTheDocument();
});

const testData = photosMock[0];

describe('When home page loaded', () => {
  it('Should display images', async () => {
    const screen = renderWithRouterAndRedux(<Home />);
    const image = await screen.findByAltText(testData.alt_description);
    expect(image).toBeInTheDocument();
  });
});
