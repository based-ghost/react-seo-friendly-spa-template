import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import type { FunctionComponent } from 'react';
import type { SizeProp, IconProp } from '@fortawesome/fontawesome-svg-core';

type AlertProps = Readonly<{
  title: string;
  subTitle: string;
  show?: boolean;
  icon?: IconProp;
  iconSize?: SizeProp;
  alertColor?: string;
  alertAnimation?: string;
  alertBackgroundColor?: string;
}>;

const TileContainer = styled.div`
  margin: 0 auto;
  padding: 15rem 0 20rem !important;
`;

const Notification = styled.div<Partial<AlertProps>>`
  text-align: center;
  padding: 1.75rem .25rem;
  box-shadow: 0 2px 15px 0 rgba(18,16,19,.2);
  color: ${({ alertColor }) => alertColor};
  animation: ${({ alertAnimation }) => alertAnimation};
  background-color: ${({ alertBackgroundColor }) => alertBackgroundColor};

  .title {
    font-size: 2em;
    font-weight: 700;
    margin-left: 0.75rem;
  }

  .subtitle {
    font-size: 1.6em;
    margin-top: 0.25rem;
  }

  @media only screen and (max-width: 449px) {
    svg {
      vertical-align: -0.225em;
    }

    .title {
      font-size: 1.5em;
    }

    .subtitle {
      font-size: 1.05em;
    }
  }
`;

const Alert: FunctionComponent<AlertProps> = ({
  title,
  subTitle,
  show = true,
  iconSize = '2x',
  alertColor = '#fff',
  icon = 'info-circle',
  alertAnimation = 'none',
  alertBackgroundColor = '#4dc6e7'
}) => (
  <TileContainer className="tile is-parent is-vertical is-8">
    {show && (
      <Notification
        alertColor={alertColor}
        alertAnimation={alertAnimation}
        alertBackgroundColor={alertBackgroundColor}
        className="notification tile is-child"
      >
        <div>
          <FontAwesomeIcon
            icon={icon}
            size={iconSize}
          />
          <span className="title">{title}</span>
        </div>
        <p className="subtitle">{subTitle}</p>
      </Notification>
    )}
  </TileContainer>
);

export default Alert;
