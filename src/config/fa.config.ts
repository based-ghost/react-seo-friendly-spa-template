import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSun,
  faMoon,
  faCheck,
  faInfoCircle,
  faAngleDoubleUp,
  faExternalLinkAlt,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';
import {
  faEtsy,
  faReact,
  faGithub,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

export const registerIcons = () => {
  library.add(
    faSun,
    faMoon,
    faEtsy,
    faCheck,
    faReact,
    faGithub,
    faTwitter,
    faInfoCircle,
    faAngleDoubleUp,
    faExternalLinkAlt,
    faExclamationCircle
  );
};
