import Form from './Form';
import { it, describe } from 'vitest';
import renderWithRouterAndRedux from '../../__tests__/render-with-router';

describe('When Form component rendered', () => {
  it('should display only form element', () => {
    const { getByText, queryByText } = renderWithRouterAndRedux(<Form />);

    const submitBtn = getByText(/submit/i);
    const msg = getByText(/card created/i);
    const card = queryByText(/file name/i);
    const formError = queryByText(/must/i);

    expect(submitBtn).toBeInTheDocument();
    expect(msg).not.toBeVisible();
    expect(card).toBeNull();
    expect(formError).toBeNull();
  });
});
