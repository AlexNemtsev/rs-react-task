import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store/index';

const renderWithRouterAndRedux = (component: JSX.Element, initialEntries?: string[]) =>
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={initialEntries}>{component}</MemoryRouter>
    </Provider>
  );

export default renderWithRouterAndRedux;
