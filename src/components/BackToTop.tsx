import React, { useEffect, useState, useRef } from 'react';
import Scroll from 'react-scroll';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// 'react-scroll' configuration
const scroll = Scroll.animateScroll;

const scrollOptions = Object.freeze({
  delay: 5,
  duration: 500,
  smooth: 'easeInOutCubic'
});

// 'styled-components' specific to BackToTop.tsx component
const BackToTopLink = styled.a<{ $show: boolean }>`
  width: 3.5rem;
  z-index: 9999;
  display: block;
  height: 3.5rem;
  right: 1.25rem;
  cursor: pointer;
  position: fixed;
  user-select: none;
  border-radius: 50%;
  -webkit-touch-callout: none;
  background: rgb(37, 40, 47);
  -webkit-tap-highlight-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 20px;
  transition: opacity 0.4s ease, bottom 0.4s ease;
  bottom: ${({ $show }) => $show ? '1.25rem' : '-3.5rem'};
  opacity: ${({ $show }) => $show ? 1 : 0};
`;

const AngleDoubleUpIcon = styled(FontAwesomeIcon)`
  display: block;
  color: #61dafb;
  font-size: 1.75em;
  padding-left: 0.1rem;
  margin: 0.75rem auto auto auto;
`;

// Write the show state value to a ref so we can use it as a check to prevent 
// ...re-renders on every scroll down that triggers a show for the button
const BackToTop: React.FC = () => {
  const showRef = useRef<boolean>(false);
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!showRef.current && (window.scrollY || window.pageYOffset) > 100) {
        showRef.current = true;
        setShow(true);
      } else if ((window.scrollY || window.pageYOffset) === 0) {
        showRef.current = false;
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <BackToTopLink
      $show={show}
      role='button'
      aria-label='BackToTop'
      onClick={(): void => scroll.scrollToTop(scrollOptions)}
    >
      <AngleDoubleUpIcon icon='angle-double-up' />
    </BackToTopLink>
  );
};

export default BackToTop;
