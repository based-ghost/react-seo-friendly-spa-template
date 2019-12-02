import React from 'react';
import Home from './views/Home';
import About from './views/About';
import Layout from './components/Layout';
import { withTracker } from './withTracker';
import NotFound from './components/NotFound';
import { Route, Switch } from 'react-router-dom';
import { RoutesConfig } from './config/routes.config';

const App: React.FC = () => (
  <Layout>
    <Switch>
      <Route
        path={RoutesConfig.Home.path}
        component={withTracker(Home)}
        exact={RoutesConfig.Home.exact}
      />
      <Route
        path={RoutesConfig.About.path}
        component={withTracker(About)}
        exact={RoutesConfig.About.exact}
      />
      <Route component={NotFound} />
    </Switch>
  </Layout>
);

export default App;
