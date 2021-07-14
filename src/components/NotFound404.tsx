import { useLayoutEffect, Fragment } from 'react';
import { isLocationPath } from '../utils';
import Alert from './Alert';
import MetaInfo from './MetaInfo';

import type { FunctionComponent } from 'react';

const PATH_404 = '/404';
const NOT_FOUND_TITLE = '404: Not Found';
const NOT_FOUND_DESCRIPTION = 'The requested page could not be found.';

const NotFound404: FunctionComponent = () => {
  useLayoutEffect(() => {
    if (!isLocationPath(PATH_404)) {
      window.location.href = PATH_404;
    }
  }, []);

  return (
    <section className="container view-wrapper">
      {isLocationPath(PATH_404) && (
        <Fragment>
          <MetaInfo
            title={NOT_FOUND_TITLE}
            description={NOT_FOUND_DESCRIPTION}
          />
          <Alert
            title={NOT_FOUND_TITLE}
            subTitle={NOT_FOUND_DESCRIPTION}
            icon="exclamation-circle"
            alertBackgroundColor="#e93e60"
            alertAnimation="rubberBand_animation 1s"
          />
        </Fragment>
      )}
    </section>
  );
};

export default NotFound404;
