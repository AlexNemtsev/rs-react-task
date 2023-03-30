import { render } from 'react-dom';
import { MemoryRouter } from 'react-router-dom';

const renderWithRouter = (component: JSX.Element) =>
  render(<MemoryRouter>{component}</MemoryRouter>);

export default renderWithRouter;
