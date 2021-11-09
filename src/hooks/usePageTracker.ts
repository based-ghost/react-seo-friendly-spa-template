import ReactGA from 'react-ga';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { routes } from '../config/routes.config';
import { IS_PRODUCTION } from '../config/env.config';

// Initialize the react-ga plugin using your issued GA tracker code + options
ReactGA.initialize('UA-000000-01', {
  debug: !IS_PRODUCTION,
  gaOptions: {
    cookieFlags: 'max-age=7200;secure;samesite=none'
  }
});

// Define custom hook to handle page tracking
const usePageTracker = (): void => {
  const location = useLocation();

  useEffect(() => {
    const { pathname, search } = location;
    const isValidPath = routes.some((x) => x.path === pathname);

    if (isValidPath) {
      const page = pathname + search;
      ReactGA.set({ page });
      ReactGA.pageview(page);
    }
  }, [location]);
};

export default usePageTracker;
