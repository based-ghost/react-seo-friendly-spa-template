import React from 'react';
import { MetaInfo } from '../../components';
import { RoutesConfig } from '../../config/routes.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About: React.FC = () => (
  <section className='container view-wrapper'>
    <MetaInfo {...RoutesConfig.About.metaInfo} />
    <div className='tile is-parent is-8 is-vertical is-notification-tile'>
      <div className='notification tile is-child is-primary pageSlideDown-animation'>
        <div>
          <FontAwesomeIcon icon='info-circle' size='2x' />
          <span className='title'>About Page</span>
        </div>
        <p className='subtitle'>Very interesting information may go here.</p>
      </div>
    </div>
  </section>
);

export default About;
