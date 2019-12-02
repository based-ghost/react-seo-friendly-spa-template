import React, { useLayoutEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NotFound: React.FC = () => {
  const isLocation404: boolean = (window && window.location.pathname === '/404');

  useLayoutEffect(() => {
    if (window.location.pathname !== '/404') {
      window.location.href = '/404';
    }
  }, []);

  return (
    <section className='container view-wrapper'>
      <div className='tile is-parent is-8 is-vertical is-notification-tile is-not-found-tile'>
        <div className={(`notification tile is-child is-danger ${isLocation404 ? 'rubberBand-animation' : ''}`).trim()}>
          <div>
            <FontAwesomeIcon icon='exclamation-circle' size='2x' />
            <span className='title'>404 Not Found</span>
          </div>
          <p className='subtitle'>The requested page could not be found.</p>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
