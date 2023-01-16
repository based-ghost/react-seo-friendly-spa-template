import type { FunctionComponent } from 'react';
import type { Package as PackageProps } from '../../config/packages.config';

const Package: FunctionComponent<PackageProps> = ({
  package_name,
  description_1,
  description_2
}) => (
  <div className="column">
    <p className="title">{package_name}</p>
    <div className="content">
      <div>
        <code>{package_name}</code> {description_1}
      </div>
      <p>{description_2}</p>
    </div>
  </div>
);

export default Package;