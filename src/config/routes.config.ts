import { IconProp } from '@fortawesome/fontawesome-svg-core';

export type MetaInfoProps = {
  readonly title?: string;
  readonly description?: string;
};

export type Route = {
  readonly path: string;
  readonly icon: IconProp;
  readonly exact?: boolean;
  readonly displayName: string;
  readonly activeClassName: string;
  readonly metaInfo: MetaInfoProps;
};

export const RoutesConfig = Object.freeze<Record<string, Route>>({
  Home: {
    path: '/',
    exact: true,
    displayName: 'Home',
    activeClassName: 'is-active',
    icon: 'home',
    metaInfo: {
      title: 'Home | ReactSeoFriendlySpaTemplate',
      description: 'Home page description - limit of 160 characters (try for 150-155).'
    }
  },
  About: {
    path: '/about',
    exact: true,
    displayName: 'About',
    activeClassName: 'is-active',
    icon: 'info',
    metaInfo: {
      title: 'About | ReactSeoFriendlySpaTemplate',
      description: 'About page description - limit of 160 characters (try for 150-155).'
    }
  }
});
