import Helmet from 'react-helmet';
import { FunctionComponent } from 'react';
import { RoutesConfig, MetaInfoProps } from '../config/routes.config';
import { APP_NAME, DEFAULT_LOCALE, BASE_URL, AUTHOR_NAME } from '../config/env.config';

const {
  title: _defaultTitle,
  description: _defaultDescription
} = RoutesConfig.Home.metaInfo;

const MetaInfo: FunctionComponent<MetaInfoProps> = ({
  meta = [],
  defer = false,
  lang = DEFAULT_LOCALE,
  title = _defaultTitle,
  description = _defaultDescription
}) => (
  <Helmet
    defer={defer}
    title={title}
    htmlAttributes={{ lang }}
    titleTemplate={`%s | ${APP_NAME}`}
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
        property: 'og:type',
        content: 'website'
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

export default MetaInfo;
