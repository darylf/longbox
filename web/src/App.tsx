import * as React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Layout } from './components/layout/';
import { AppProvider } from './context';
import * as Pages from './modules/pages';

const UnauthenticatedRoutes = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/books" component={Pages.Books} />
      <Route path="/publishers" component={Pages.Publishers} />
      <Route path="/series" component={Pages.Series} />
      <Route path="/trending" component={Pages.ComingSoon} />
      <Route path="/my-wishlist" component={Pages.ComingSoon} />
      <Route path="/my-accout" component={Pages.ComingSoon} />
      <Route path="/about" component={Pages.ComingSoon} />
      <Route path="/contribute" component={Pages.ComingSoon} />
      <Route path="/login" component={Pages.ComingSoon} />
      <Route path="/register" component={Pages.RegistrationForm} />
      <Route path="/admin" component={Pages.AdminPage} />
      <Route exact path="/" component={Pages.HomePage} />
    </Switch>
  );
};

const AppRoutes = (): JSX.Element => {
  return <UnauthenticatedRoutes />;
};

const App = (): JSX.Element => {
  return (
    <Router>
      <AppProvider>
        <Layout>
          <AppRoutes />
        </Layout>
      </AppProvider>
    </Router>
  );
};

export default App;
