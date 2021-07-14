import { Alert, MetaInfo } from '../../components';
import { RoutesConfig } from '../../config/routes.config';

import type { FunctionComponent } from 'react';

const About: FunctionComponent = () => (
  <section className="container view-wrapper">
    <MetaInfo {...RoutesConfig.About.metaInfo} />
    <Alert
      title="About Page"
      alertAnimation="rubberBand_animation 1s"
      subTitle="Very interesting information may go here."
    />
  </section>
);

export default About;
