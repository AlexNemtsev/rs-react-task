import { render } from '@testing-library/react';
import Form from './Form';
import { it, describe } from 'vitest';

describe('When Form component rendered', () => {
  it('should display form element', () => {
    const screen = render(<Form />);
    const submitBtn = screen.getByText(/submit/i);
    expect(submitBtn).toBeInTheDocument();
  });

  it('should not display confirmation message', () => {
    const screen = render(<Form />);
    const msg = screen.queryByText(/card created/i);
    expect(msg).not.toBeVisible();
  });
});
