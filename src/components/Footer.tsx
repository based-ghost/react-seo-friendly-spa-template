import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer: React.FC = () => (
  <footer className='footer'>
    <div className='buttons'>
      <a
        target='_blank'
        aria-label='GitHub'
        rel='noopener noreferrer'
        className='button is-medium'
        href='https://github.com/based-ghost'
      >
        <FontAwesomeIcon icon={['fab', 'github']} />
      </a>
      <a
        href='#/'
        aria-label='Twitter'
        className='button is-medium'
      >
        <FontAwesomeIcon icon={['fab', 'twitter']} />
      </a>
      <a
        href='#/'
        aria-label='Medium'
        className='button is-medium'
      >
        <FontAwesomeIcon icon={['fab', 'medium-m']} />
      </a>
    </div>
    <div className='content'>ReactSeoFriendlySpaTemplate.com &copy; 2019</div>
  </footer>
);

export default Footer;
