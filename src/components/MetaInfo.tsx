import React from 'react';
import { Helmet } from 'react-helmet';

type MetaInfoProps = {
  metaInfo: {
    title?: string;
    description?: string;
  };
};

const MetaInfo: React.FC<MetaInfoProps> = ({ 
  metaInfo: {
    title,
    description,
  },
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name='og:title' content={title} />
    <meta name='description' content={description} />
    <meta name='og:description' content={description} />
  </Helmet>
);

export default MetaInfo;
