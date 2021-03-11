import { useEffect, ComponentType } from 'react';
import { IS_PRODUCTION } from '../config/env.config';
import { RouteComponentProps, useLocation } from 'react-router-dom';
import ReactGA, { FieldsObject, InitializeOptions } from 'react-ga';

// Initialize the react-ga plugin using your issued GA tracker code + options
const initializeOptions: InitializeOptions = {
  debug: !IS_PRODUCTION,
  gaOptions: {
    cookieFlags: 'max-age=7200;secure;samesite=none'
  }
};

ReactGA.initialize('UA-000000-01', initializeOptions);

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
      const page = pathname + search;
      trackPage(page);
    }, [location]);

    return <WrappedComponent {...props} />;
  };

  return HOC;
};

export default WithTracker;
