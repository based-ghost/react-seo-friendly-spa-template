import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

// Initialize the react-ga plugin using your issued GA tracker code
ReactGA.initialize("UA-0000000-0");

// React.FC component used as a wrapper for route components - e.g. withTracker(RouteComponent)
export const withTracker = (WrappedComponent, options = {}) => {
  const trackPage = (page) => {
    ReactGA.set({
      page,
      ...options
    });
    ReactGA.pageview(page);
  };

  const HOC = (props) => {
    useEffect(() => trackPage(props.location.pathname), [
      props.location.pathname
    ]);

    return <WrappedComponent {...props} />;
  };

  return HOC;
};