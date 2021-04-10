import { NavLink } from 'react-router-dom';
import ToggleTheme from './ToggleTheme';
import { RoutesConfig } from '../config/routes.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactComponent as ReactSeoLogoSvg } from '../assets/img/ReactSeoLogo.svg';

import type { FunctionComponent } from 'react';

const Navbar: FunctionComponent = () => (
  <nav
    role='navigation'
    className='navbar'
    aria-label='Main navigation'
  >
    <div className='navbar-wrapper'>
      <div className='brand-wrapper'>
        <ReactSeoLogoSvg
          role='img'
          height='68'
          width='170'
          aria-hidden
          title='react-seo-template'
        />
      </div>
      <div className='navbar-routes'>
        <NavLink
          className='navbar-item'
          to={RoutesConfig.Home.path}
          exact={RoutesConfig.Home.exact}
          activeClassName={RoutesConfig.Home.activeClassName}
        >
          <span>{RoutesConfig.Home.displayName}</span>
        </NavLink>
        <NavLink
          className='navbar-item'
          to={RoutesConfig.About.path}
          exact={RoutesConfig.About.exact}
          activeClassName={RoutesConfig.About.activeClassName}
        >
          <span>{RoutesConfig.About.displayName}</span>
        </NavLink>
        <div className='seperator' />
        <a
          target='_blank'
          aria-label='GitHub'
          className='navbar-item'
          rel='noopener noreferrer'
          href='https://github.com/based-ghost'
        >
          <span>GitHub</span>
          <FontAwesomeIcon icon='external-link-alt' />
        </a>
        <div className='navbar-theme-toggle'>
          <ToggleTheme />
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
