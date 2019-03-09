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

config.autoAddCss = false;

library.add(
    faHome,
    faInfo,
    faCheck,
    faGithub,
    faMediumM,
    faTwitter,
    faExclamationCircle,
);