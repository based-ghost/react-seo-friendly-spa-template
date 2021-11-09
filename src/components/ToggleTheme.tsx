import styled from 'styled-components';
import { useUpdateEffect, useOnClickOutside } from '../hooks';
import { useState, useRef, useCallback, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import type { FunctionComponent } from 'react';

type ToggleThemeProps = Readonly<{
  onThemeChange?: (checked: boolean) => any;
}>;

type ToggleControlProps = Readonly<{
  focused: boolean;
  checked: boolean;
}>;

const ICON_COLOR = '#fac863';
const ACCENT_COLOR = '#61dafb';
const PRIMARY_COLOR = '#4d4d4d';
const TOGGLE_CTRL_COLOR = '#fafafa';

const onThemeChangeDefaultFn = (checked: boolean) => {
  const theme = checked ? 'secondary' : 'primary';
  document.body.className = `${theme}-theme`;
};

const ToggleContainer = styled.div`
  cursor: pointer;
  user-select: none;
  position: relative;
  touch-action: pan-x;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
`;

const ToggleTrack = styled.div`
  width: 58px;
  height: 28px;
  border-radius: 30px;
  background-color: ${PRIMARY_COLOR};

  > div {
    height: 100%;
    position: absolute;

    &:first-of-type {
      left: 8px;
    }

    &:last-of-type {
      right: 8px;
    }
  }
`;

const ToggleThemeIcon = styled(FontAwesomeIcon)`
  && {
    width: 1.05rem;
    height: 1.05rem;
    font-size: 1.05rem;
    color: ${ICON_COLOR};
    vertical-align: -.165rem;
  }
`;

const ToggleControl = styled.div<ToggleControlProps>`
  left: 0px;
  top: 1.5px;
  width: 25px;
  height: 25px;
  position: absolute;
  border-radius: 50%;
  box-sizing: border-box;
  will-change: transform;
  background-color: ${TOGGLE_CTRL_COLOR};

  transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1),
    box-shadow 0.5s cubic-bezier(0.23, 1, 0.32, 1),
    border 0.5s cubic-bezier(0.23, 1, 0.32, 1);

  transform: translateX(${({ checked }) => checked ? 2.5 : 31}px);
  border: 0.5px solid ${({ focused }) => focused ? ACCENT_COLOR : PRIMARY_COLOR};
  box-shadow: ${({ focused }) => focused ? `0 0 2.75px 1.75px ${ACCENT_COLOR}` : 'none'};
`;

const ToggleTheme: FunctionComponent<ToggleThemeProps> = ({
  onThemeChange = onThemeChangeDefaultFn
}) => {
  const [checked, setChecked] = useState<boolean>(false);
  const [focused, setFocused] = useState<boolean>(false);

  const parentDivRef = useRef<HTMLDivElement | null>(null);
  const onThemeChangeRef = useRef<typeof onThemeChangeDefaultFn>(onThemeChange);

  // Deps list has "focused" to limit extraneous setStates causing rerenders on every outside click
  const onParentClickOutside = useCallback(
    () => focused && setFocused(false),
    [focused]
  );

  useOnClickOutside(parentDivRef, onParentClickOutside);

  // Write onThemeChange prop to ref and then execute in effect below to gaurd
  // ..against non-memoized props causing the effect to fire when it should not
  useEffect(() => {
    onThemeChangeRef.current = onThemeChange;
  }, [onThemeChange]);

  // Update theme global state in this effect
  useUpdateEffect(() => {
    onThemeChangeRef.current(checked);
  }, [checked]);

  const onToggleTheme = () => {
    setFocused(true);
    setChecked((prevChecked) => !prevChecked);
  };

  return (
    <ToggleContainer
      ref={parentDivRef}
      onClick={onToggleTheme}
    >
      <ToggleTrack>
        <div>
          <ToggleThemeIcon icon="sun" />
        </div>
        <div>
          <ToggleThemeIcon icon="moon" />
        </div>
      </ToggleTrack>
      <ToggleControl
        checked={checked}
        focused={focused}
      />
    </ToggleContainer>
  );
};

export default ToggleTheme;