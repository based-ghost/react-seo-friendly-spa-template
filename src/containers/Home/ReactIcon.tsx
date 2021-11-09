import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ROTATE_KEYFRAMES = keyframes`
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
`;

const ReactIcon = styled(FontAwesomeIcon).attrs({
  icon: ['fab', 'react']
})`
  animation: ${ROTATE_KEYFRAMES} infinite 10s linear;

  && {
    width: 88%;
    height: 88%;
  }
`;

export default ReactIcon;