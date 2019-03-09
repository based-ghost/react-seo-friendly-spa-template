import React from 'react';
import { Helmet } from 'react-helmet';
import { RoutesConfig } from '../config/routes.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class About extends React.PureComponent<{}> {
    public render(): React.ReactNode {
        return (
            <section className='container'>
                <Helmet>
                    <title>{RoutesConfig.About.meta.metaInfo.title}</title>
                    <meta name="og:title" content={RoutesConfig.About.meta.metaInfo.title} />
                    <meta name="description" content={RoutesConfig.About.meta.metaInfo.description} />
                    <meta name="og:description" content={RoutesConfig.About.meta.metaInfo.description} />
                </Helmet>
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
    }
}