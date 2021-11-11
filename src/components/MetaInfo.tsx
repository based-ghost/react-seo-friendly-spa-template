import Helmet from 'react-helmet';
import { getRouteMetaInfo } from '../config/routes.config';
import {
  APP_NAME,
  BASE_URL,
  AUTHOR_NAME,
  DEFAULT_LANG,
  DEFAULT_LOCALE
} from '../config/env.config';

import type { FunctionComponent } from 'react';
import type { MetaInfoProps } from '../config/routes.config';

const {
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION
} = getRouteMetaInfo('Home');

const MetaInfo: FunctionComponent<MetaInfoProps> = ({
  meta = [],
  defer = false,
  lang = DEFAULT_LANG,
  title = DEFAULT_TITLE,
  locale = DEFAULT_LOCALE,
  description = DEFAULT_DESCRIPTION
}) => {
  const url = window?.location.href || 'unknown';

  return (
    <Helmet
      defer={defer}
      title={title}
      htmlAttributes={{ lang }}
      titleTemplate={`${APP_NAME} | %s`}
      link={[
        {
          rel: 'canonical',
          href: url
        }
      ]}
      meta={[
        {
          name: 'description',
          content: description
        },
        {
          property: 'og:description',
          content: description
        },
        {
          property: 'og:title',
          content: title
        },
        {
          property: 'og:site_name',
          content: APP_NAME
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:url',
          content: url
        },
        {
          property: 'og:locale',
          content: locale
        },
        {
          property: 'og:image',
          content: `${BASE_URL}logo192.png`
        },
        {
          name: 'author',
          content: AUTHOR_NAME
        }
      ].concat(meta)}
    />
  );
};

export default MetaInfo;
