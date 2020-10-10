import React from 'react';
import { Helmet } from 'react-helmet';
import { MetaInfoProps } from '../config/routes.config';

const MetaInfo: React.FC<MetaInfoProps> = React.memo(({ title, description }) => (
  <Helmet>
    <title>{title}</title>
    <meta name='og:title' content={title} />
    <meta name='description' content={description} />
    <meta name='og:description' content={description} />
  </Helmet>
));

MetaInfo.displayName = 'MetaInfo';

export default MetaInfo;
