# react-seo-friendly-spa-template
React PWA/SPA template configured for SEO (initially scaffolded with Create React App).

Features:
- TypeScript
- All components written as `FunctionComponents` using `React Hooks`
- Custom `BackToTop.tsx` component that uses [`react-scroll`](https://github.com/fisshy/react-scroll) and [`styled-components`](https://github.com/styled-components/styled-components)
- Google analytics management with [`react-ga`](https://github.com/react-ga/react-ga)
- Route meta tag management with [`react-helmet`](https://github.com/nfl/react-helmet)
- Configured to serve prerendered static HTML with [`react-snapshot`](https://github.com/geelen/react-snapshot)

## Demo

![demo](./demo/ReactSeoFriendlyDemo.gif)

## General Overview
This is the React version based on my Vue SEO template which you can find here: [vue-seo-friendly-spa-template](https://github.com/based-ghost/vue-seo-friendly-spa-template)

## Technology Stack Overview

### Create React App

initial scaffolding

### react-helmet

[`react-helmet`](https://github.com/nfl/react-helmet) - plugin that allows you to manage your app's meta information. It is reusable React component will manage all of your changes to the document head - Helmet takes plain HTML tags and outputs plain HTML tags. It's dead simple, and React beginner friendly.

I have it configured to use one more level of abstraction, where I have the Helmet component and child meta tags broken out to its own component `MetaInfo.tsx`:

`MetaInfo.tsx`
```TSX
import React from 'react';
import { Helmet } from 'react-helmet';
import { MetaInfoProps } from '../config/routes.config';

export type MetaInfoProps = {
  title?: string;
  description?: string;
};

const MetaInfo: React.FC<MetaInfoProps> = React.memo(
  ({ title, description }) => (
    <Helmet>
      <title>{title}</title>
      <meta name='og:title' content={title} />
      <meta name='description' content={description} />
      <meta name='og:description' content={description} />
    </Helmet>
  )
);

MetaInfo.displayName = 'MetaInfo';

export default MetaInfo;
```

...and used in component `About.tsx`

```TSX
import React from 'react';
import MetaInfo from '../components/MetaInfo';
import { RoutesConfig } from '../config/routes.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About: React.FC = () => (
  <section className='container view-wrapper'>
    <MetaInfo {...RoutesConfig.About.metaInfo} />
    <div className='tile is-parent is-8 is-vertical is-notification-tile'>
      <div className='notification tile is-child is-primary pageSlideDown-animation'>
        <div>
          <FontAwesomeIcon icon='info-circle' size='2x' />
          <span className='title'>About Page</span>
        </div>
        <p className='subtitle'>Very interesting information may go here.</p>
      </div>
    </div>
  </section>
);

export default About;
```

### react-ga

[`react-ga`](https://github.com/react-ga/react-ga) - This is a JavaScript module that can be used to include Google Analytics tracking code in a website or app that uses React for its front-end codebase. It does not currently use any React code internally, but has been written for use with a number of Mozilla Foundation websites that are using React, as a way to standardize our GA Instrumentation across projects.

My preferred configuration - in a seperate utility function named `withTracker.tsx`:

```TSX
import React, { useEffect } from 'react';
import ReactGA, { FieldsObject } from 'react-ga';
import { RouteComponentProps } from 'react-router-dom';

// Initialize the react-ga plugin using your issued GA tracker code
ReactGA.initialize('UA-0000000-0');

// React.FC component used as a wrapper for route components - e.g. withTracker(RouteComponent)
export const withTracker = <P extends RouteComponentProps>(
  WrappedComponent: React.ComponentType<P>,
  options: FieldsObject = {}
) => {
  const trackPage = (page: string) => {
    ReactGA.set({ page, ...options });
    ReactGA.pageview(page);
  };

  return (props: P) => {
    const { pathname } = props.location;

    useEffect(() => {
      trackPage(pathname);
    }, [pathname]);

    return <WrappedComponent {...props} />;
  };
};
```

...and then used as a wrapper for your route components whereever you define your `Route` objects:

e.g. in my `App.tsx`

```TSX
import React from 'react';
import Layout from './Layout';
import { NotFound } from './components';
import { Home, About } from './containers';
import { withTracker } from './withTracker';
import { Route, Switch } from 'react-router-dom';
import { RoutesConfig } from './config/routes.config';

const App: React.FC = () => (
  <Layout>
    <Switch>
      <Route
        path={RoutesConfig.Home.path}
        component={withTracker(Home)}
        exact={RoutesConfig.Home.exact}
      />
      <Route
        path={RoutesConfig.About.path}
        component={withTracker(About)}
        exact={RoutesConfig.About.exact}
      />
      <Route component={NotFound} />
    </Switch>
  </Layout>
);

export default App;
```

### react-snapshot

[`react-snapshot`](https://github.com/geelen/react-snapshot) - Unlike some of the various solutions I have experimented with for `Vue`, this is essentially zero-configuration. Visit the link to review how it works in detail, but the basic premise is that server-side rendering is a big feature of React, but for most apps it can be more trouble than its worth and this plugin serves a static snapshot of all your site's publicly-accessible pages (leaving anything requiring authentication as a normal, JS-driven Single Page App).

Configured in a React (TypeScript) as follows:

`react-app-env.d.ts` - at the bottom of this generated typings file add the following module declaration...

```typescript
/// <reference types="react-scripts" />

declare module 'react-snapshot' {
  import * as ReactDOM from 'react-dom';
  var render: ReactDOM.Renderer;
}
```

`index.tsx` - import the `render` method from `react-snapshot`...

```typescript
import React from 'react';
import App from './App';
import { render } from 'react-snapshot';
import { BrowserRouter } from 'react-router-dom';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
```

`package.json` - under the "scripts" section for the "build" option, change to reflect...

`"build": "react-scripts build && react-snapshot"`

## Scripts

### `npm install`

After cloning the repo, run this command.  This will:

- Install Node dependencies from package.json

### `npm run start`

To start the app (development build), run this command.  This will:

- Compile the app and run on the development server

### `npm run test`

- Execute any Jest tests (based on your configration)

### `npm run sitemap`

- This command will execute code in the sitemap-generator.js. Using the sitemapUrl parameter defined in that file (should reflect your registered domain name) a sitemap.xml is generated and persisted under the 'public' folder - this file is referenced in the robots.txt file. This uses the `sitemap-generator` package.

### `npm run build`

This script will:
 - Build release Webpack bundles and run react-snapshot to serve prerendered static files
