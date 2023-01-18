import Layout from './Layout';
import type { FunctionComponent } from 'react';
import { routes } from './config/routes.config';
import { MetaInfo, NotFound404 } from './components';
import { usePageTracker, useScrollToTop } from './hooks';
import { useLocation, Route, Routes } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

const App: FunctionComponent = () => {
  useScrollToTop();
  usePageTracker();
  const location = useLocation();

  return (
    <Layout>
      <MetaInfo />
      <SwitchTransition mode="out-in">
        <CSSTransition
          timeout={250}
          classNames="fade"
          key={location.key}
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
