import React, { ReactElement } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Layout from "./components/layout/";
import * as Pages from "./pages";
import AppProvider from "./providers";

const App = (): ReactElement => {
  return (
    <Router>
      <AppProvider>
        <Layout>
          <Switch>
            <Route path="/admin" component={Pages.Admin} />
            <Route path="/explore" component={Pages.Explore} />
            <Route path="/my-collection" component={Pages.MyCollection} />
            <Route path="/trending" component={Pages.Trending} />
            <Route path="/login" component={Pages.Login} />
            <Route exact path="/" component={Pages.Home} />
          </Switch>
        </Layout>
      </AppProvider>
    </Router>
  );
};

export default App;
