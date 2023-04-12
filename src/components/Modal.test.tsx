import Modal from './Modal';
import { render } from '@testing-library/react';
import photosMock from '../../tests/tests-data/photos';
import { vi } from 'vitest';

const portalRoot = document.createElement('div');
portalRoot.setAttribute('id', 'portal-root');
document.body.appendChild(portalRoot);

test('Card rendered', async () => {
  const screen = render(<Modal photo={photosMock[0]} isOpen={true} handleClose={vi.fn()} />);
  const image = await screen.findByAltText(photosMock[0].alt_description);
  expect(image).toBeInTheDocument();

  const likes = await screen.findByText(`❤️${photosMock[0].likes}`);
  const author = await screen.findByText(`Taken by ${photosMock[0].user.username}`);

  expect(likes).toBeInTheDocument();
  expect(author).toBeInTheDocument();
});
