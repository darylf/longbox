import React, { ReactElement } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/layout";
import * as Pages from "./pages";
import AppProvider from "./providers";

const SiteName = "Longbox";

export const PageTitle = (title: string) =>
  title ? `${title} | ${SiteName}` : SiteName;

const App = (): ReactElement => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Longbox</title>
    </Helmet>
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
            <Route path="/publishers" component={Pages.ListPublishers} />
            <Route path="/series/:id" component={Pages.ViewSeries} />
            <Route path="/trending" component={Pages.Trending} />
            <Route path="/users/:id" component={Pages.ViewUser} />
            <Route path="/users" component={Pages.ListUsers} />
            <Route exact path="/" component={Pages.Home} />
          </Switch>
        </Layout>
      </AppProvider>
    </Router>
  </>
);

export default App;
