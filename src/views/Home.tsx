import React from 'react';
import { Helmet } from 'react-helmet';
import { RoutesConfig } from '../config/routes.config';
import reactLogo from '../assets/img/react-logo-512px.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home: React.FC<{}> = () =>  (
    <div>
        <Helmet>
            <title>{RoutesConfig.Home.metaInfo.title}</title>
            <meta name="og:title" content={RoutesConfig.Home.metaInfo.title} />
            <meta name="description" content={RoutesConfig.Home.metaInfo.description} />
            <meta name="og:description" content={RoutesConfig.Home.metaInfo.description} />
        </Helmet>
        <section className='hero is-dark'>
            <div className='hero-body'>
                <div className='container has-text-centered'>
                    <div className='blog-title-img is-flex is-horizontal-center'>
                        <figure className='image is-154x154'>
                            <img src={reactLogo} alt='logo' />
                        </figure>
                    </div>
                    <h1 className='title blog-title'>SEO Friendly SPA</h1>
                    <hr />
                    <h2 className='subtitle'><FontAwesomeIcon icon='check' /> TypeScript + TSX</h2>
                    <h2 className='subtitle'><FontAwesomeIcon icon='check' /> UI styled with Bulma CSS + SASS + Font Awesome 5 (svg-core)</h2>
                    <h2 className='subtitle'><FontAwesomeIcon icon='check' /> Configured as a (PWA) Progressive Web App</h2>
                    <h2 className='subtitle'><FontAwesomeIcon icon='check' /> Meta tags dynamically handled per route using <code>react-helmet</code></h2>
                    <h2 className='subtitle'><FontAwesomeIcon icon='check' /> Google Analytics ready to go and easily configurable using <code>react-ga</code></h2>
                    <h2 className='subtitle blog-intro'><FontAwesomeIcon icon='check' /> Configured to serve prerendered HTML using <code>react-snapshot</code></h2>
                </div>
            </div>
        </section>
        <section className='container dashboard-content'>
            <div className='columns'>
                <div className='column'>
                    <p className='title'>react-helmet</p>
                    <div className='content'>
                        <p><code>react-helmet</code> is a React plugin that allows you to manage your app's meta information, much like vue-meta does for Vue (vue-meta is based on react-helmet). It makes use of a reusable component that takes plain HTML tags and outputs plan HTML tags.</p>
                        <p>These properties, when set on a deeply nested component, will cleverly overwrite their parent components' meta tag information, thereby enabling custom info for each top-level view as well as coupling meta info directly to deeply nested subcomponents for more maintainable code.</p>
                    </div>
                </div>
                <hr />
                <div className='column'>
                    <p className='title'>react-ga</p>
                    <div className='content'>
                        <p><code>react-ga</code> is a JavaScript module that can be used to include Google Analytics tracking code in a website or app that uses React for its front-end codebase. It does not currently use any React code internally, but has been written for use with a number of Mozilla Foundation websites that are using React, as a way to standardize our GA Instrumentation across projects.</p>
                        <p>It is designed to work with the latest version of Google Analytics, Universal Analytics. At this point, all Google Analytics projects are being upgraded to Universal Analytics, so this module will not support the older ga.js implementation.</p>
                    </div>
                </div>
                <hr />
                <div className='column'>
                    <p className='title'>react-snapshot</p>
                    <div className='content'>
                        <p><code>react-snapshot</code> is a zero-configuration static pre-renderer for React apps. Starting by targeting Create React App (because it's great)</p>
                        <p>Prerendering differs from (SSR) Server Side Rendering. You can get almost all the advantages of it (without the disadvantages) by using prerendering. Prerendering is basically firing up a headless browser, loading your app's routes, and saving the results to a static HTML file. You can then serve it with whatever static-file-serving solution you were using previously. It just works with HTML5 navigation and the likes.</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className='columns'>
                <div className='column'>
                    <p className='title'>Lorem Ipsum</p>
                    <div className='content'>
                        Lorem ipsum dolor sit amet, alia appareat usu id, has legere facilis in. Nam inani malorum epicuri id, illud eleifend reformidans nec cu. Stet meis rebum quo an, ad recusabo praesent reprimique duo, ne delectus expetendis philosophia nam. Mel lorem recusabo ex, vim congue facilisis eu, id vix oblique mentitum. Vide aeterno duo ei. Qui ne urbanitas conceptam deseruisse, commune philosophia eos no. Id ullum reprimique qui, vix ei malorum assueverit contentiones. Nec facilis dignissim efficiantur ad, tantas tempor nam in. Per feugait atomorum ut. Novum appareat ei usu, an usu omnium concludaturque. Et nam latine mentitum, impedit explicari ullamcorper ut est, vis ipsum viderer ei. Porro essent eu per, ut tantas dissentias vim. Dicant regione argumentum vis id, adipisci accusata postulant at vix. Adipisci vituperata ea duo, eu summo detracto mei, et per option periculis. Eos laudem vivendo ex. Ius alia essent audiam id, mea quando putant id, ex ponderum deterruisset eam. Simul possit ocurreret ne mea, eu illum petentium abhorreant has. Mea ad amet detracto mandamus, no putent mandamus sea. In pri minim quando, harum menandri intellegat vis at. No mei vulputate complectitur, per tamquam delectus complectitur ad. No alia corrumpit usu, cum no tota propriae deterruisset, mea an clita utroque democritum. Debet aliquam blandit ei nec. Usu malis suscipit delectus an, nec summo viris an, duis iriure civibus sed cu. Eos errem dictas id. Cu causae audiam forensibus mea, et audiam omnesque has. Nec et clita ancillae salutandi, in insolens assueverit eum. Cu sed zril adipisci. Per nisl diam ex. Ei vel meis inciderint, vel ei dictas sanctus explicari, nam id odio gubergren. Cum tollit quaestio ei, sit labore meliore accusamus ad, has an dolor utinam. Ne erat facete ius, ludus euripidis eum in, ei duis soluta vocent vix. Quis libris ei nam.
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default Home;