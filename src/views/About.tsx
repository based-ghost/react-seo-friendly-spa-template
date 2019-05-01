import React from 'react';
import MetaInfo from '../components/MetaInfo';
import { RoutesConfig } from '../config/routes.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About: React.FC<{}> = () => (
  <section className='container'>
    <MetaInfo metaInfo={RoutesConfig.About.metaInfo} />
    <div className='tile is-parent is-notification-tile-parent is-vertical is-8'>
      <div className='notification is-primary'>
        <div className='title'>
          <FontAwesomeIcon icon='info' /> About Page
        </div>
        <p className='subtitle'>About page/application/company description.</p>
      </div>
    </div>
  </section>
);

export default About;
