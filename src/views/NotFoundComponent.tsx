import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class NotFoundComponent extends React.PureComponent<{}> {
    constructor(props) {
        super(props);
        if (window.location.pathname !== '/404') {
            window.location.href = '/404';
        }
    }

    public render(): React.ReactNode {
        return (
            <section className='container'>
                <div className='tile is-parent is-notification-tile-parent is-vertical is-8'>
                    <div className='notification is-danger'>
                        <div className='title'>
                            <FontAwesomeIcon icon='exclamation-circle' /> 404 Not Found
                        </div>
                        <p className='subtitle'>The requested page could not be found.</p>
                    </div>
                </div>
            </section>
        );
    }
}