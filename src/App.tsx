import Layout from './Layout';
import { routes } from './config/routes.config';
import { MetaInfo, NotFound404 } from './components';
import { usePageTracker, useScrollToTop } from './hooks';
import { useLocation, Route, Routes } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import type { FunctionComponent } from 'react';

const App: FunctionComponent = () => {
  useScrollToTop();
  usePageTracker();

  const location = useLocation();
  const cssKey = location.pathname?.split('/')[1] || '/';

  return (
    <Layout>
      <MetaInfo />
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={cssKey}
          timeout={250}
          classNames="fade"
        >
          <Routes location={location}>
            {routes.map(({ path, Component }) => (
              <Route
                key={path}
                path={path}
                element={<Component />}
              />
            ))}
            <Route
              path="*"
              element={<NotFound404 />}
            />
          </Routes>
        </CSSTransition>
      </SwitchTransition>
    </Layout>
  );
};

export default App;
