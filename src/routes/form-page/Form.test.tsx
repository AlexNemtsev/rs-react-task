import { render } from '@testing-library/react';
import Form from './Form';
import { it, describe } from 'vitest';

describe('When Form component rendered', () => {
  it('should display only form element', () => {
    const { getByText, queryByText } = render(<Form />);

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
