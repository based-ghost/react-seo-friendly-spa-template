import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { animateScroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import type { FunctionComponent } from 'react';

const _scrollOptions = {
  delay: 0,
  duration: 500,
  smooth: 'easeInOutCubic'
};

const _handleAnimateScroll = () => animateScroll.scrollToTop(_scrollOptions);

const AngleDoubleUpIcon = styled(FontAwesomeIcon)`
  display: block;
  color: #61dafb;
  font-size: 1.75em;
  padding-left: 0.1rem;
  margin: 0.75rem auto auto auto;
`;

const BackToTopLink = styled.a<{ show: boolean }>`
  width: 3.5rem;
  z-index: 9999;
  display: block;
  height: 3.5rem;
  right: 1.25rem;
  cursor: pointer;
  position: fixed;
  user-select: none;
  border-radius: 50%;
  background: rgb(37, 40, 47);
  -webkit-tap-highlight-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 20px;
  transition: opacity 0.4s ease, bottom 0.4s ease;

  opacity: ${({ show }) => show ? '1' : '0'};
  bottom: ${({ show }) => show ? '1.25' : '-3.5'}rem;
`;

// Write the show state value to a ref so we can use it as a check to prevent
// ...re-renders on every scroll down that triggers a show for the button
const BackToTop: FunctionComponent = () => {
  const showRef = useRef<boolean>(false);
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollY = window.scrollY || window.pageYOffset;

      if (!showRef.current && scrollY > 100) {
        showRef.current = true;
        setShow(true);
      } else if (showRef.current && scrollY < 1) {
        showRef.current = false;
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
      capture: false
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <BackToTopLink
      show={show}
      role='button'
      aria-label='Back to top'
      onClick={_handleAnimateScroll}
    >
      <AngleDoubleUpIcon icon='angle-double-up' />
    </BackToTopLink>
  );
};

export default BackToTop;
