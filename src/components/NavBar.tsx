import React from 'react';
import { NavLink } from 'react-router-dom';
import { RoutesConfig } from '../config/routes.config';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import reactSeoLogo from '../assets/img/react-seo-template.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar: React.FC<{}> = () => (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-wrapper'>
            <div className='brand-wrapper'>
                <img src={reactSeoLogo} width='215' alt='react-seo-template' />
            </div>
            <div id='navbar-routes' className='navbar-routes'>
                <NavLink exact={true} to={RoutesConfig.Home.path} className='navbar-item' activeClassName='is-active'>
                    <span className='icon'>
                        <FontAwesomeIcon icon={RoutesConfig.Home.icon as IconProp} />
                    </span>
                    <span>{RoutesConfig.Home.displayName}</span>
                </NavLink>
                <NavLink exact={true} to={RoutesConfig.About.path} className='navbar-item' activeClassName='is-active'>
                    <span className='icon'>
                        <FontAwesomeIcon icon={RoutesConfig.About.icon as IconProp} />
                    </span>
                    <span>{RoutesConfig.About.displayName}</span>
                </NavLink>
            </div>
        </div>
    </nav>
);

export default NavBar;