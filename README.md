# react-seo-friendly-spa-template
React PWA/SPA template configured for SEO (initially scaffolded with Create React App).

Features:
- TypeScript
- Incorporates [`styled-components`](https://github.com/styled-components/styled-components)
- Route transitions handled using [`react-transition-group`](https://github.com/reactjs/react-transition-group)
- Written entirely with `React Hooks` (no legacy class components)
- Google analytics management with [`react-ga`](https://github.com/react-ga/react-ga)
- Route meta tag management with [`react-helmet`](https://github.com/nfl/react-helmet)
- Configured to serve prerendered static HTML with [`react-snap`](https://github.com/stereobooster/react-snap)
- Custom `BackToTop.tsx` component that uses [`react-scroll`](https://github.com/fisshy/react-scroll)
- Custom `ToggleTheme.tsx` component that handles light/dark theme transitions

## Demo

![demo](./demo/react_seo_friendly_demo.gif)

## General Overview
This is the React version based on my Vue SEO template which you can find here: [vue-seo-friendly-spa-template](https://github.com/based-ghost/vue-seo-friendly-spa-template)

## Technology Stack Overview

### Create React App

initial scaffolding

### react-helmet

[`react-helmet`](https://github.com/nfl/react-helmet) - plugin that allows you to manage your app's meta information. It is a reusable React component that will manage all of your changes to the document head - Helmet takes plain HTML tags and outputs plain HTML tags. It's dead simple, and React beginner friendly.

I have it configured to use one more level of abstraction, where I have the Helmet component and child meta tags broken out to its own component `MetaInfo.tsx` - referenced at the root of the app i `App.tsx` to initialize data and then referenced in each route component to override route-specific values (`Home.tsx`, `About.tsx`, `NotFound404.tsx`):

`MetaInfo.tsx`
```jsx
import Helmet from 'react-helmet';
import { getRouteMetaInfo } from '../config/routes.config';
import { APP_NAME, DEFAULT_LOCALE, BASE_URL, AUTHOR_NAME } from '../config/env.config';

import type { FunctionComponent } from 'react';
import type { MetaInfoProps } from '../config/routes.config';

const {
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION
} = getRouteMetaInfo('Home');

const MetaInfo: FunctionComponent<MetaInfoProps> = ({
  meta = [],
  defer = false,
  lang = DEFAULT_LOCALE,
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION
}) => (
  <Helmet
    defer={defer}
    title={title}
    htmlAttributes={{ lang }}
    titleTemplate={`${APP_NAME} | %s`}
    meta={[
      {
        name: 'description',
        content: description
      },
      {
        property: 'og:description',
        content: description
      },
      {
        property: 'og:title',
        content: title
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:image',
        content: `${BASE_URL}logo192.png`
      },
      {
        name: 'author',
        content: AUTHOR_NAME
      }
    ].concat(meta)}
  />
);

export default MetaInfo;
```

...and used in `About` component

```jsx
import { Alert, MetaInfo } from '../../components';
import { getRouteMetaInfo } from '../../config/routes.config';

import type { FunctionComponent } from 'react';

const About: FunctionComponent = () => (
  <div className="container view-wrapper">
    <MetaInfo {...getRouteMetaInfo('About')} />
    <Alert
      title="About Page"
      alertAnimation="rubberBand_animation 1s"
      subTitle="Very interesting information may go here."
    />
  </div>
);

export default About;
```

### react-ga

[`react-ga`](https://github.com/react-ga/react-ga) - This is a JavaScript module that can be used to include Google Analytics tracking code in a website or app that uses React for its front-end codebase. It does not currently use any React code internally, but has been written for use with a number of Mozilla Foundation websites that are using React, as a way to standardize our GA Instrumentation across projects.

My preferred configuration - in a custom hook that initializes your google analytics settings and contains an effect that reacts to the `location` object that is retrieved from the referenced `react-router-dom` hook `useLocation` - `usePageTracker.ts`:

```jsx
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
```

...and then use that hook in the root of the application tree:

e.g. in the `App.tsx` component

```jsx
import Layout from './Layout';
import { routes } from './config/routes.config';
import { MetaInfo, NotFound404 } from './components';
import { usePageTracker, useScrollToTop } from './hooks';
import { useLocation, Route, Switch } from 'react-router-dom';
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
          <Switch location={location}>
            {routes.map(({ path, exact, component }) => (
              <Route
                key={path}
                path={path}
                exact={exact}
                component={component}
              />
            ))}
            <Route
              path="*"
              children={<NotFound404 />}
            />
          </Switch>
        </CSSTransition>
      </SwitchTransition>
    </Layout>
  );
};

export default App;
```

### react-snap

[`react-snapshot`](https://github.com/stereobooster/react-snap) - Pre-renders a web app into static HTML. Uses Headless Chrome to crawl all available links starting from the root. Heavily inspired by prep and react-snapshot, but written from scratch. Uses best practices to get the best loading performance.

Configured in two simple steps:

Added following entry to `package.json`:

```json
"scripts": {
  "postbuild": "react-snap"
}
```

And then in `src/index.tsx`:

```jsx
import { hydrate, render } from 'react-dom';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const appNode = (
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);

const rootElement = document.getElementById('root');
const hasChildNodes = !!rootElement?.hasChildNodes();

hasChildNodes
  ? hydrate(appNode, rootElement)
  : render(appNode, rootElement);
```

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
