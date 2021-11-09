import { Home, About } from '../containers';

import type { ComponentType } from 'react';

export type MetaInfoProps = Partial<
  Readonly<{
    meta: any[];
    lang: string;
    title: string;
    defer: boolean;
    description: string;
  }>
>;

export type Route = Readonly<{
  path: string;
  name: string;
  metaInfo: MetaInfoProps;
  Component: ComponentType;
}>;

const DESC_SUFFIX = 'description - length <= 160 chars.';

export const routes: Route[] = [
  {
    path: '/',
    name: 'Home',
    Component: Home,
    metaInfo: {
      title: 'Home',
      description: `Home ${DESC_SUFFIX}`
    }
  },
  {
    path: '/about',
    name: 'About',
    Component: About,
    metaInfo: {
      title: 'About',
      description: `About ${DESC_SUFFIX}`
    }
  }
];

export const getRouteMetaInfo = (name: string): MetaInfoProps => {
  const route = routes.find((x) => x.name === name);
  return route?.metaInfo ?? {};
};