import { MetaInfo } from '.';
import { useEffect, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import type { FunctionComponent } from 'react';

const NotFound404: FunctionComponent = () => {
  const title = '404: Not Found';
  const description = 'The requested page could not be found.';
  const isPath404 = window?.location?.pathname === '/404';

  useEffect(() => {
    if (window && window.location.pathname !== '/404') {
      window.location.href = '/404';
    }
  }, []);

  return (
    <section className='container view-wrapper view-not-found'>
      <div className='tile is-parent is-8 is-vertical is-notification-tile is-not-found-tile'>
        {isPath404 && (
          <Fragment>
            <MetaInfo title={title} description={description} />
            <div className='notification tile is-child is-danger rubberBand-animation'>
              <div>
                <FontAwesomeIcon icon='exclamation-circle' size='2x' />
                <span className='title'>{title}</span>
              </div>
              <p className='subtitle'>{description}</p>
            </div>
          </Fragment>
        )}
      </div>
    </section>
  );
};

export default NotFound404;
