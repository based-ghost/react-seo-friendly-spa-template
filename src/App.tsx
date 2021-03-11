import { FunctionComponent } from 'react';
import Layout from './Layout';
import { WithTracker } from './utils';
import { Home, About } from './containers';
import { Route, Switch } from 'react-router-dom';
import { MetaInfo, NotFound404 } from './components';
import { RoutesConfig } from './config/routes.config';

const App: FunctionComponent = () => (
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

export default App;
