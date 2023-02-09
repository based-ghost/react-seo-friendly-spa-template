import Alert from './Alert';
import MetaInfo from './MetaInfo';
import type { FunctionComponent } from 'react';

const NOT_FOUND_TITLE = '404: Not Found';
const NOT_FOUND_DESCRIPTION = 'The requested page could not be found.';

const NotFound404: FunctionComponent = () => (
  <div className="container view-wrapper">
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
  </div>
);

export default NotFound404;
