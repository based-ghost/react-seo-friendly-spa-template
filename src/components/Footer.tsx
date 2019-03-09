import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer: React.FC<{}> = () => (
    <footer className='footer'>
        <div className='buttons'>
            <a className='button is-medium' aria-label='GitHub'>
                <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
            <a className='button is-medium' aria-label='Twitter'>
                <FontAwesomeIcon icon={['fab', 'twitter']} />
            </a>
            <a className='button is-medium' aria-label='Medium'>
                <FontAwesomeIcon icon={['fab', 'medium-m']} />
            </a>
        </div>
        <div className='content'>ReactSeoFriendlySpaTemplate.com &copy; 2019</div>
    </footer>
);

export default React.memo(Footer);