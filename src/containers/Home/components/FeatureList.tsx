import React, { Fragment } from 'react';
import { FeatureInfo } from '../../../config/features.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type FeatureListProps = {
  readonly featureList: FeatureInfo[];
};

const FeatureList = React.memo<FeatureListProps>(({ featureList }) => (
  <Fragment>
    {featureList.map(
      ({ packageName, description }: FeatureInfo, index: number) => (
        <h2 key={index} className='subtitle'>
          <FontAwesomeIcon icon='check' />
          {` ${description} `}
          {packageName && <code>{packageName}</code>}
        </h2>
      )
    )}
  </Fragment>
));

FeatureList.displayName = 'FeatureList';

export default FeatureList;