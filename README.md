# react-seo-friendly-spa-template
React PWA/SPA template configured for SEO (initially scaffolded with Create React App)

![](demo/react-seo-friendly-demo-2.gif)

## General Overview
This is the React version based on my Vue SEO template which you can find here: [vue-seo-friendly-spa-template](https://github.com/based-ghost/vue-seo-friendly-spa-template)

## Technology Stack Overview
- **Client**
  - TODO
  
## Scripts

### `npm install`

After cloning the repo, run this command.  This will:

- Install Node dependencies from package.json

### `npm run start`

To start the app (development build), run this command.  This will:

- Compile the app and run on the development server

### `npm run test`

- Executes Jest tests - searches for files with the suffix '.test.tsx'

### `npm run eject`

- The app was scaffolded using the Create React App - to expose all the hidden configuration and associated files, run this command. After running this, you are responsible for maintaining all the configuration files.

### `npm run sitemap`

- This command will execute code in the sitemap-generator.js. Using the sitemapUrl parameter defined in that file (should reflect your registered domain name) a sitemap.xml is generated and persisted under the 'public' folder - this file is referenced in the robots.txt file. This uses the `sitemap-generator` package.

### `npm run build`

This script will:
 - Build release Webpack bundles
 - Enable/run react-snapshot (for prerendering)
