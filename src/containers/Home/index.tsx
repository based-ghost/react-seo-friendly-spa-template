import { useMemo } from 'react';
import ReactIcon from './ReactIcon';
import FeatureList from './FeatureList';
import { MetaInfo } from '../../components';
import { RoutesConfig } from '../../config/routes.config';
import { FEATURE_INFO_CONIG } from '../../config/features.config';
import { PACKAGE_INFO_CONFIG } from '../../config/package-showcase.config';

import type { FunctionComponent } from 'react';
import type { FeatureInfo } from '../../config/features.config';

const Home: FunctionComponent = () => {
  const featureList = useMemo<FeatureInfo[]>(
    () => Object.values(FEATURE_INFO_CONIG),
    []
  );

  return (
    <div className="view-wrapper">
      <MetaInfo {...RoutesConfig.Home.metaInfo} />
      <section className="hero is-dark">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="is-flex is-horizontal-center">
              <figure className="image is-155x155">
                <ReactIcon />
              </figure>
            </div>
            <h1 className="title blog-title">SEO Friendly SPA</h1>
            <hr />
            <FeatureList featureList={featureList} />
          </div>
        </div>
      </section>
      <section className="container dashboard-content">
        <div className="columns">
          {PACKAGE_INFO_CONFIG.map(
            ({ library, description_1, description_2 }, index) => (
              <div
                key={index}
                className="column"
              >
                <p className="title">{library}</p>
                <div className="content">
                  <p>
                    <code>{library}</code> {description_1}
                  </p>
                  <p>{description_2}</p>
                </div>
              </div>
            )
          )}
        </div>
        <hr />
        <div className="columns">
          <div className="column">
            <p className="title">Lorem Ipsum</p>
            <div className="content">
              Lorem ipsum dolor sit amet, alia appareat usu id, has legere
              facilis in. Nam inani malorum epicuri id, illud eleifend
              reformidans nec cu. Stet meis rebum quo an, ad recusabo praesent
              reprimique duo, ne delectus expetendis philosophia nam. Mel lorem
              recusabo ex, vim congue facilisis eu, id vix oblique mentitum.
              Vide aeterno duo ei. Qui ne urbanitas conceptam deseruisse,
              commune philosophia eos no. Id ullum reprimique qui, vix ei
              malorum assueverit contentiones. Nec facilis dignissim efficiantur
              ad, tantas tempor nam in. Per feugait atomorum ut. Novum appareat
              ei usu, an usu omnium concludaturque. Et nam latine mentitum,
              impedit explicari ullamcorper ut est, vis ipsum viderer ei. Porro
              essent eu per, ut tantas dissentias vim. Dicant regione argumentum
              vis id, adipisci accusata postulant at vix. Adipisci vituperata ea
              duo, eu summo detracto mei, et per option periculis. Eos laudem
              vivendo ex.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
