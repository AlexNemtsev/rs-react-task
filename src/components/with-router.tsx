import { useLocation } from 'react-router-dom';

interface WithRouterProps {
  location: ReturnType<typeof useLocation>;
}

function withRouter<Props extends WithRouterProps>(Component: React.ComponentType<Props>) {
  function ComponentWithRouterProp(props: Omit<Props, keyof WithRouterProps>) {
    const location = useLocation();
    return <Component {...(props as Props)} location={location} />;
  }

  return ComponentWithRouterProp;
}

export default withRouter;
