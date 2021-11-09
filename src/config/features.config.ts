export type Feature = Readonly<{
  description: string;
  package_name?: string;
}>;

export const Features: Feature[] = [
  {
    description: 'UI styled with Bulma + SASS + Font Awesome 5 (svg-core)'
  },
  {
    description: 'Configured as a (PWA) Progressive Web App'
  },
  {
    description: 'Meta tags dynamically handled per route using',
    package_name: 'react-helmet'
  },
  {
    description: 'Google Analytics ready to go and easily configurable using',
    package_name: 'react-ga'
  },
  {
    description: 'Configured to serve prerendered html using',
    package_name: 'react-snap'
  }
];