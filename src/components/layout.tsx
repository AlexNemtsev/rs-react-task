import React from 'react';
import Header from './header';
import { Outlet } from 'react-router-dom';

interface LayoutState {
  page: string;
}

class Layout extends React.Component<object, LayoutState> {
  constructor(props: object) {
    super(props);
    this.state = { page: 'Home' };
    this.setLayoutState = this.setLayoutState.bind(this);
  }

  render(): React.ReactNode {
    return (
      <>
        <Header page={this.state.page} onClick={this.setLayoutState} />
        <main>
          <Outlet />
        </main>
      </>
    );
  }

  setLayoutState(page: string) {
    this.setState({ page });
  }
}

export default Layout;
