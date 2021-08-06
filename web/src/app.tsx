import React, { ReactElement } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Layout from "./components/layout";
import * as Pages from "./pages";
import AppProvider from "./providers";

const App = (): ReactElement => (
  <Router>
    <AppProvider>
      <Layout>
        <Switch>
          <Route path="/admin" component={Pages.Admin} />
          <Route path="/comics/:id" component={Pages.ViewBook} />
          <Route path="/creators/:id" component={Pages.ViewCreator} />
          <Route path="/explore" component={Pages.Explore} />
          <Route path="/login" component={Pages.Login} />
          <Route path="/my-collection" component={Pages.MyCollection} />
          <Route path="/publishers/:id" component={Pages.ViewPublisher} />
          <Route path="/series/:id" component={Pages.ViewSeries} />
          <Route path="/trending" component={Pages.Trending} />
          <Route exact path="/" component={Pages.Home} />
        </Switch>
      </Layout>
    </AppProvider>
  </Router>
);

export default App;
