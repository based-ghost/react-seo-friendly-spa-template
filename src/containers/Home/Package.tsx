import { memo } from 'react';

import type { Package as PackageProps } from '../../config/packages.config';

const Package = memo<PackageProps>(({
  package_name,
  description_1,
  description_2
}) => (
  <div className="column">
    <p className="title">{package_name}</p>
    <div className="content">
      <p>
        <code>{package_name}</code> {description_1}
      </p>
      <p>{description_2}</p>
    </div>
  </div>
));

Package.displayName = 'Feature';

export default Package;