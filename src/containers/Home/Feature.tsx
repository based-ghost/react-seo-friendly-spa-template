import { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import type { Feature as FeatureProps } from '../../config/features.config';

const Feature = memo<FeatureProps>(({
  description,
  package_name
}) => (
  <p className="feature">
    <FontAwesomeIcon icon="check" />
    {` ${description} `}
    {package_name && <code>{package_name}</code>}
  </p>
));

Feature.displayName = 'Feature';

export default Feature;