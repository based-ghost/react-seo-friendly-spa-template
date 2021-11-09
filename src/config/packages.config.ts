export type Package = Readonly<{
  package_name: string;
  description_1: string;
  description_2: string;
}>;

export const Packages: Package[] = [
  {
    package_name: 'react-helmet',
    description_1: `is a React plugin that allows you to manage your app's meta information, much like vue-meta does for Vue (vue-meta is based on react-helmet). It makes use of a reusable component that takes plain HTML tags and outputs plan HTML tags.`,
    description_2: `These properties, when set on a deeply nested component, will cleverly overwrite their parent components' meta tag information, thereby enabling custom info for each top-level view as well as coupling meta info directly to deeply nested subcomponents for more maintainable code.`,
  },
  {
    package_name: 'react-ga',
    description_1: `is a JavaScript module that can be used to include Google Analytics tracking code in a website or app that uses React for its front-end codebase. It does not currently use any React code internally, but has been written for use with a number of Mozilla Foundation websites that are using React, as a way to standardize our GA Instrumentation across projects.`,
    description_2: `It is designed to work with the latest version of Google Analytics, Universal Analytics. At this point, all Google Analytics projects are being upgraded to Universal Analytics, so this module will not support the older ga.js implementation.`,
  },
  {
    package_name: 'react-snap',
    description_1: `is a zero-configuration static pre-renderer for React apps.`,
    description_2: `Prerendering differs from (SSR) Server Side Rendering. You can get almost all the advantages of it (without the disadvantages) by using prerendering. Prerendering is basically firing up a headless browser, loading your app's routes, and saving the results to a static HTML file. You can then serve it with whatever static-file-serving solution you were using previously. It just works with HTML5 navigation and the likes.`,
  },
];