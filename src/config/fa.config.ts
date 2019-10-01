import { library, config } from '@fortawesome/fontawesome-svg-core';
import {
  faHome,
  faInfo,
  faCheck,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faMediumM,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

// Prevents adding of @fortawesome/fontawesome-svg-core/styles.css - global css will have only what we need
config.autoAddCss = false;

library.add(
  faHome,
  faInfo,
  faCheck,
  faGithub,
  faMediumM,
  faTwitter,
  faExclamationCircle
);
