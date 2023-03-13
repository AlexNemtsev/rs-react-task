import { Route, Routes } from 'react-router-dom';
import HomePage from './routes/home';
import AboutPage from './routes/about';
import ErrorPage from './routes/error';
import Header from './components/header';
import React from 'react';

interface AppState {
  page: string;
}

class App extends React.Component<object, AppState> {
  constructor(props: object) {
    super(props);
    this.state = { page: 'Home' };
    this.setAppState = this.setAppState.bind(this);
  }

  render(): React.ReactNode {
    return (
      <>
        <Header page={this.state.page} onClick={this.setAppState} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<ErrorPage onClick={this.setAppState} />} />
        </Routes>
      </>
    );
  }

  setAppState(page: string) {
    this.setState({ page });
  }
}

export default App;
