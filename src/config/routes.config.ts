import type { IconProp } from '@fortawesome/fontawesome-svg-core';

const GET_DESCRIPTION = (title: string): string => {
  return `${title} description - length <= 160 (optimal 150-155).`;
};

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
  icon: IconProp;
  exact?: boolean;
  displayName: string;
  activeClassName: string;
  metaInfo: MetaInfoProps;
}>;

export const RoutesConfig = Object.freeze<Record<string, Route>>({
  Home: {
    path: '/',
    exact: true,
    displayName: 'Home',
    activeClassName: 'is-active',
    icon: 'home',
    metaInfo: {
      title: 'Home',
      description: GET_DESCRIPTION('Home')
    }
  },
  About: {
    path: '/about',
    exact: true,
    displayName: 'About',
    activeClassName: 'is-active',
    icon: 'info',
    metaInfo: {
      title: 'About',
      description: GET_DESCRIPTION('About')
    }
  }
});
