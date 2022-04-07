import Alert from './Alert';
import MetaInfo from './MetaInfo';
import { useEffect, Fragment, type FunctionComponent } from 'react';

const PATH_404 = '/404';
const NOT_FOUND_TITLE = '404: Not Found';
const NOT_FOUND_DESCRIPTION = 'The requested page could not be found.';

const NotFound404: FunctionComponent = () => {
  const isLocationPath = window.location.pathname === PATH_404;

  useEffect(() => {
    if (!isLocationPath) {
      window.location.href = PATH_404;
    }
  }, [isLocationPath]);

  return (
    <div className="container view-wrapper">
      {isLocationPath && (
        <Fragment>
          <MetaInfo
            title={NOT_FOUND_TITLE}
            description={NOT_FOUND_DESCRIPTION}
          />
          <Alert
            title={NOT_FOUND_TITLE}
            subTitle={NOT_FOUND_DESCRIPTION}
            iconName="exclamation-circle"
            alertBackgroundColor="#e93e60"
            alertAnimation="rubberBand_animation 1s"
          />
        </Fragment>
      )}
    </div>
  );
};

export default NotFound404;
