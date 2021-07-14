import Layout from './Layout';
import { useEffect } from 'react';
import { Home, About } from './containers';
import { Route, Switch } from 'react-router-dom';
import { MetaInfo, NotFound404 } from './components';
import { RoutesConfig } from './config/routes.config';
import { configureReactToastify, WithTracker } from './utils';

import type { FunctionComponent } from 'react';

const App: FunctionComponent = () => {
  useEffect(() => {
    configureReactToastify();
  }, []);

  return (
    <Layout>
      <MetaInfo />
      <Switch>
        <Route
          path={RoutesConfig.Home.path}
          component={WithTracker(Home)}
          exact={RoutesConfig.Home.exact}
        />
        <Route
          path={RoutesConfig.About.path}
          component={WithTracker(About)}
          exact={RoutesConfig.About.exact}
        />
        <Route component={NotFound404} />
      </Switch>
    </Layout>
  );
};

export default App;
