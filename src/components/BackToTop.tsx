import styled from 'styled-components';
import { useLatestRef } from '../hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState, type FunctionComponent } from 'react';

const AngleDoubleUpIcon = styled(FontAwesomeIcon).attrs({
  icon: 'angle-double-up'
})`
  display: block;
  color: #20232a;
  font-size: 1.5em;
  padding-left: 0.1rem;
  margin: 0.95rem auto auto;
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
  background: #61dafb;
  border: 1px solid transparent;
  -webkit-tap-highlight-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.265) 0px 0px 20px;
  transition: opacity 0.4s ease, bottom 0.4s ease;
  opacity: ${({ show }) => show ? 1 : 0};
  bottom: ${({ show }) => show ? 1.25 : -3.5}rem;
`;

// Write the show state value to a ref so we can use it as a check to prevent
// ...re-renders on every scroll down that triggers a show for the button
const BackToTop: FunctionComponent = () => {
  const [show, setShow] = useState<boolean>(false);
  const showRef = useLatestRef<boolean>(show);

  useEffect(() => {
    const onScroll = () => {
      if (
        (!showRef.current && window.pageYOffset > 100) ||
        (showRef.current && window.pageYOffset === 0)
      ) {
        setShow((prevShow) => !prevShow);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [showRef]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <BackToTopLink
      show={show}
      role="button"
      aria-label="Back to top"
      onClick={scrollToTop}
    >
      <AngleDoubleUpIcon />
    </BackToTopLink>
  );
};

export default BackToTop;
