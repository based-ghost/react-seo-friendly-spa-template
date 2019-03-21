# react-seo-friendly-spa-template
React PWA/SPA template configured for SEO (initially scaffolded with Create React App)

![demo](./demo/react-seo-friendly-demo-2.gif)

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

type MetaInfoProps = {
    metaInfo: { 
        title?: string;
        description?: string;
    }
}

const MetaInfo: React.FC<MetaInfoProps> = (props) => (
    <Helmet>
        <title>{props.metaInfo.title || ''}</title>
        <meta name="og:title" content={props.metaInfo.title || ''} />
        <meta name="description" content={props.metaInfo.description || ''} />
        <meta name="og:description" content={props.metaInfo.description || ''} />
    </Helmet>
);

export default MetaInfo;
```

e.g. used in view component `About.tsx`

```TSX
import React from 'react';
import MetaInfo from '../components/MetaInfo';
import { RoutesConfig } from '../config/routes.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About: React.FC<{}> = () => (
    <section className='container'>
        <MetaInfo metaInfo={RoutesConfig.About.metaInfo} />
        <div className='tile is-parent is-notification-tile-parent is-vertical is-8'>
            <div className='notification is-primary'>
                <div className='title'>
                    <FontAwesomeIcon icon='info' /> About Page
                </div>
                <p className='subtitle'>About page/application/company description.</p>
            </div>
        </div>
    </section>
);

export default About;
```

### react-ga

[`react-ga`](https://github.com/react-ga/react-ga) - This is a JavaScript module that can be used to include Google Analytics tracking code in a website or app that uses React for its front-end codebase. It does not currently use any React code internally, but has been written for use with a number of Mozilla Foundation websites that are using React, as a way to standardize our GA Instrumentation across projects.

My preferred configuration:

In a seperate utility component named `withTracker.tsx`:

```TSX
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
```

...and then used as a wrapper for your route components whereever you define your `Route` objects:

e.g. in my `App.tsx`

```TSX
import { Route, Switch } from 'react-router-dom';
import { withTracker } from './utils/withTracker';

const App: React.FC<{}> = (props) => (
  <Layout>
    <Switch>
      <Route exact path={RoutesConfig.Home.path} component={withTracker(Home)} />
      <Route exact path={RoutesConfig.About.path} component={withTracker(About)} />
      <Route component={NotFoundComponent} />
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
import { render } from 'react-snapshot';

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
