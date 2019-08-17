import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NotFoundComponent: React.FC<{}> = () => {
  useEffect(() => {
    if (window.location.pathname !== '/404') {
      window.location.href = '/404';
    }
  });

  return (
    <section className='container'>
      <div className='tile is-parent is-notification-tile-parent is-vertical is-8'>
        <div className='notification is-danger'>
          <div className='title'>
            <FontAwesomeIcon icon='exclamation-circle' /> 404 Not Found
          </div>
          <p className='subtitle'>The requested page could not be found.</p>
        </div>
      </div>
    </section>
  );
};

export default NotFoundComponent;
