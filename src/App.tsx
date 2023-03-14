import { Route, Routes } from 'react-router-dom';
import HomePage from './routes/home';
import AboutPage from './routes/about';
import ErrorPage from './routes/error-page/error';
import React from 'react';
import Layout from './components/layout';
import FormPage from './routes/form-page/form';

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
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/form" element={<FormPage />} />
          </Route>
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
