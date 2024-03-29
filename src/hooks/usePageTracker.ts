import ReactGA from 'react-ga';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { isLocationValidRoute } from '../config/routes.config';

// Initialize the react-ga plugin using your issued GA tracker code + options
ReactGA.initialize('UA-000000-01', {
  testMode: process.env.NODE_ENV === 'test',
  debug: process.env.NODE_ENV !== 'production',
  gaOptions: {
    cookieFlags: 'max-age=7200;secure;samesite=none'
  }
});

// Define custom hook to handle page tracking
const usePageTracker = (): void => {
  const location = useLocation();

  useEffect(() => {
    const { pathname, search } = location;

    if (isLocationValidRoute(pathname)) {
      const page = pathname + search;
      ReactGA.set({ page });
      ReactGA.pageview(page);
    }
  }, [location]);
};

export default usePageTracker;
