import { createPortal } from 'react-dom';

interface ReactPortalProps {
  children: React.ReactNode;
}

const ReactPortal = ({ children }: ReactPortalProps) => {
  const portalRoot = document.getElementById('portal-root') as HTMLElement;

  return createPortal(children, portalRoot);
};

export default ReactPortal;
