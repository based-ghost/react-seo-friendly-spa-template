import { IconProp } from '@fortawesome/fontawesome-svg-core';

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

const getDescription = (title: string) => `${title} description - length <= 160 (optimal 150-155).`;

export const RoutesConfig = Object.freeze<Record<string, Route>>({
  Home: {
    path: '/',
    exact: true,
    displayName: 'Home',
    activeClassName: 'is-active',
    icon: 'home',
    metaInfo: {
      title: 'Home',
      description: getDescription('Home')
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
      description: getDescription('About')
    }
  }
});
