import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

const renderWithRouter = (component: JSX.Element, initialEntries?: string[]) =>
  render(<MemoryRouter initialEntries={initialEntries}>{component}</MemoryRouter>);

export default renderWithRouter;
