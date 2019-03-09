import React from 'react';
import Home from './views/Home';
import About from './views/About';
import Layout from './components/Layout';
import { Route, Switch } from 'react-router-dom';
import { withTracker } from './utils/withTracker';
import { RoutesConfig } from './config/routes.config';
import NotFoundComponent from './views/NotFoundComponent';

export default class App extends React.Component<{}> {
  public render(): React.ReactNode {
    return (
      <Layout>
          <Switch>
              <Route exact path={RoutesConfig.Home.path} component={withTracker(Home)} />
              <Route path={RoutesConfig.About.path} component={withTracker(About)} />
              <Route component={NotFoundComponent} />
          </Switch>
      </Layout>
    );
  }
}