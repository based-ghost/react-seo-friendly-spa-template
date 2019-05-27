import React from 'react';
import { Helmet } from 'react-helmet';

type MetaInfoProps = {
  metaInfo: {
    title?: string;
    description?: string;
  };
};

const MetaInfo: React.FC<MetaInfoProps> = (props) => (
  <Helmet>
    <title>{props.metaInfo.title || ''}</title>
    <meta name='og:title' content={props.metaInfo.title || ''} />
    <meta name='description' content={props.metaInfo.description || ''} />
    <meta name='og:description' content={props.metaInfo.description || ''} />
  </Helmet>
);

export default MetaInfo;
