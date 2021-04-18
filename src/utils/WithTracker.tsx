import ReactGA from 'react-ga';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { clearAllToasts } from './react-toastify';
import { IS_PRODUCTION } from '../config/env.config';

import type { ComponentType } from 'react';
import type { RouteComponentProps } from 'react-router-dom';
import type { FieldsObject, InitializeOptions } from 'react-ga';

// Initialize the react-ga plugin using your issued GA tracker code + options
const INIT_OPTIONS: InitializeOptions = {
  debug: !IS_PRODUCTION,
  gaOptions: {
    cookieFlags: 'max-age=7200;secure;samesite=none'
  }
};

ReactGA.initialize('UA-000000-01', INIT_OPTIONS);

// HOC component handling page tracking - e.g. WithTracker(RouteComponent)
const WithTracker = <P extends RouteComponentProps>(
  WrappedComponent: ComponentType<P>,
  options: FieldsObject = {}
) => {
  const trackPage = (page: string): void => {
    ReactGA.set({ page, ...options });
    ReactGA.pageview(page);
  };

  const HOC = (props: P): JSX.Element => {
    const location = useLocation();

    useEffect(() => {
      const { pathname, search } = location;
      trackPage(pathname + search);
      clearAllToasts();
    }, [location]);

    return <WrappedComponent {...props} />;
  };

  return HOC;
};

export default WithTracker;
