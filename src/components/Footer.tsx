import type { FunctionComponent } from 'react';
import { APP_NAME } from '../config/env.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const COPYRIGHT_ENTITY = `Copyright © ${new Date().getFullYear()} ${APP_NAME?.toLowerCase()}.com`;

const Footer: FunctionComponent = () => (
  <footer className="footer">
    <div className="buttons">
      <a
        target="_blank"
        aria-label="GitHub"
        rel="noopener noreferrer"
        className="button is-medium"
        href="https://github.com/based-ghost"
      >
        <FontAwesomeIcon icon={["fab", "github"]} />
      </a>
      <a
        href="#/"
        aria-label="Twitter"
        className="button is-medium"
      >
        <FontAwesomeIcon icon={["fab", "twitter"]} />
      </a>
      <a
        href="#/"
        aria-label="Medium"
        className="button is-medium"
      >
        <FontAwesomeIcon icon={["fab", "etsy"]} />
      </a>
    </div>
    <div className="content has-text-centered">
      {COPYRIGHT_ENTITY}
    </div>
  </footer>
);

export default Footer;
