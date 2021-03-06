# react-seo-friendly-spa-template
React PWA/SPA template configured for SEO (initially scaffolded with Create React App).

Features:
- TypeScript
- Written entirely with the `React Hooks API` (no legacy `class` components)
- Google analytics management with [`react-ga`](https://github.com/react-ga/react-ga)
- Route meta tag management with [`react-helmet`](https://github.com/nfl/react-helmet)
- Configured to serve prerendered static HTML with [`react-snapshot`](https://github.com/geelen/react-snapshot)
- Custom `BackToTop.tsx` component that uses [`react-scroll`](https://github.com/fisshy/react-scroll) and [`styled-components`](https://github.com/styled-components/styled-components)
- Custom `ToggleTheme.tsx` component built using [`styled-components`](https://github.com/styled-components/styled-components) - this is intended for toggling between themes (e.g. dark/light mode), however, for demo purposes a toggle event will trigger a toast notification using [`react-toastify`](https://github.com/fkhadra/react-toastify)

## Demo

![demo](./demo/ReactSeoFriendlyDemo.gif)

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
import { RoutesConfig } from '../config/routes.config';
import { APP_NAME, DEFAULT_LOCALE, BASE_URL, AUTHOR_NAME } from '../config/env.config';

import type { FunctionComponent } from 'react';
import type { MetaInfoProps } from '../config/routes.config';

const {
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION
} = RoutesConfig.Home.metaInfo;

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
    titleTemplate={`%s | ${APP_NAME}`}
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

...and used in component `About.tsx`

```jsx
import { MetaInfo } from '../../components';
import { RoutesConfig } from '../../config/routes.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import type { FunctionComponent } from 'react';

const About: FunctionComponent = () => (
  <section className='container view-wrapper'>
    <MetaInfo {...RoutesConfig.About.metaInfo} />
    <div className='tile is-parent is-8 is-vertical is-notification-tile'>
      <div className='notification tile is-child is-primary pageSlideDown-animation'>
        <div>
          <FontAwesomeIcon
            size='2x'
            icon='info-circle'
          />
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

My preferred configuration - in a seperate file that initializes your google analytics settings and exports an HOC wrapper component to consume your route components with - `WithTracker.tsx`:

```jsx
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
```

...and then used as a wrapper for your route components whereever you define your `Route` objects:

e.g. in my `App.tsx`

```jsx
import Layout from './Layout';
import { useEffect } from 'react';
import { Home, About } from './containers';
import { Route, Switch } from 'react-router-dom';
import { MetaInfo, NotFound404 } from './components';
import { RoutesConfig } from './config/routes.config';
import { WithTracker, configureReactToastify } from './utils';

import type { FunctionComponent } from 'react';

const App: FunctionComponent = () => {
  useEffect(() => {
    configureReactToastify();
  }, []);

  return (
    <Layout>
      <MetaInfo />
      <Switch>
        <Route
          path={RoutesConfig.Home.path}
          component={WithTracker(Home)}
          exact={RoutesConfig.Home.exact}
        />
        <Route
          path={RoutesConfig.About.path}
          component={WithTracker(About)}
          exact={RoutesConfig.About.exact}
        />
        <Route component={NotFound404} />
      </Switch>
    </Layout>
  );
};

export default App;
```

### react-snapshot

[`react-snapshot`](https://github.com/geelen/react-snapshot) - Unlike some of the various solutions I have experimented with for `Vue`, this is essentially zero-configuration. Visit the link to review how it works in detail, but the basic premise is that server-side rendering is a big feature of React, but for most apps it can be more trouble than its worth and this plugin serves a static snapshot of all your site's publicly-accessible pages (leaving anything requiring authentication as a normal, JS-driven Single Page App).

Configured in a React (TypeScript) as follows:

`react-snapshot.d.ts` - in this typings file add the following module declaration...

```typescript
declare module 'react-snapshot' {
  import * as ReactDOM from 'react-dom';
  const render: ReactDOM.Renderer;
}
```

`index.tsx` - import the `render` method from `react-snapshot`...

```jsx
import { render } from 'react-snapshot';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import './assets/style/main.scss';
import './config/fa.config';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
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
