import React from 'react';
import { NavLink } from 'react-router-dom';
import { RoutesConfig } from '../config/routes.config';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class NavBar extends React.Component<{}> {
    public render(): React.ReactNode {
        return (
            <nav className='navbar' role='navigation' aria-label='main navigation'>
                <div className='navbar-wrapper'>
                    <div className='brand-wrapper'>
                        <img src={require('../assets/img/react-seo-template.png')} width='215' alt='' />
                    </div>
                    <div id='navbar-routes' className='navbar-routes'>
                        <NavLink exact={true} to={RoutesConfig.Home.path} className='navbar-item' activeClassName='is-active'>
                            <span className='icon'>
                                <FontAwesomeIcon icon={RoutesConfig.Home.meta.icon as IconProp} />
                            </span>
                            <span>{RoutesConfig.Home.displayName}</span>
                        </NavLink>
                        <NavLink to={RoutesConfig.About.path} className='navbar-item' activeClassName='is-active'>
                            <span className='icon'>
                                <FontAwesomeIcon icon={RoutesConfig.About.meta.icon as IconProp} />
                            </span>
                            <span>{RoutesConfig.About.displayName}</span>
                        </NavLink>
                    </div>
                </div>
            </nav>
        );
    }
}