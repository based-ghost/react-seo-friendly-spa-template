import React, { useEffect } from 'react';
import ReactGA, { FieldsObject } from 'react-ga';
import { RouteComponentProps } from 'react-router-dom';

// Initialize the react-ga plugin using your issued GA tracker code
ReactGA.initialize('UA-0000000-0', {
  gaOptions: {
    cookieFlags: 'max-age=7200;secure;samesite=none'
  }
});

// React.FC component used as a wrapper for route components - e.g. withTracker(RouteComponent)
export const withTracker = <P extends RouteComponentProps>(
  WrappedComponent: React.ComponentType<P>,
  options: FieldsObject = {}
) => {
  const trackPage = (page: string): void => {
    ReactGA.set({ page, ...options });
    ReactGA.pageview(page);
  };

  return (props: P): JSX.Element => {
    const { pathname } = props.location;

    useEffect(() => {
      trackPage(pathname);
    }, [pathname]);

    return <WrappedComponent {...props} />;
  };
};
