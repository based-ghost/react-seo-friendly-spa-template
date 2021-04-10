import styled from 'styled-components';
import { toast } from 'react-toastify';
import { useState, useRef, useCallback, useEffect } from 'react';
import { useUpdateEffect, useOnClickOutside } from '../hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import type { FunctionComponent } from 'react';

type ToggleThemeProps = Readonly<{
  onThemeChange?: (checked: boolean) => any;
}>;

type ToggleControlProps = Readonly<{
  focused: boolean;
  checked: boolean;
}>;

type ToggleTrackProps = Pick<ToggleControlProps, 'checked'>;

//
// ===========================================
// STRART: color hex codes

const _iconColor = '#fac863';
const _accentColor = '#61dafb';
const _primaryColor = '#4d4d4d';
const _toggleCtrlColor = '#fafafa';

// END: color hex codes
// ===========================================
//

const _onThemeChangeDefault = (checked: boolean) => {
  return checked
    ? toast('Light theme!')
    : toast.dark('Dark theme!');
};

const ToggleContainer = styled.div`
  cursor: pointer;
  user-select: none;
  position: relative;
  touch-action: pan-x;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
`;

const ToggleThemeIcon = styled(FontAwesomeIcon)`
  && {
    width: 1.05rem;
    height: 1.05rem;
    font-size: 1.05rem;
    color: ${_iconColor};
    vertical-align: -.175rem;
  }
`;

const ToggleTrack = styled.div<ToggleTrackProps>`
  width: 60px;
  height: 28px;
  border-radius: 30px;
  background-color: ${_primaryColor};

  > div {
    height: 100%;
    position: absolute;
    transition: opacity 0.25s ease-in-out;

    &:first-of-type {
      left: 11px;
      opacity: ${({ checked }) => checked ? '1' : '0'};
    }

    &:last-of-type {
      right: 11px;
      opacity: ${({ checked }) => checked ? '0' : '1'};
    }
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
  background-color: ${_toggleCtrlColor};
  transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1),
    box-shadow 0.5s cubic-bezier(0.23, 1, 0.32, 1),
    border-color 0.5s cubic-bezier(0.23, 1, 0.32, 1);

  transform: translateX(${({ checked }) => checked ? '34.5' : '0'}px);
  border: 1px solid ${({ focused }) => focused ? _accentColor : _primaryColor};
  box-shadow: ${({ focused }) => focused ? `0 0 3px 2.75px ${_accentColor}` : 'none'};
`;

const ToggleTheme: FunctionComponent<ToggleThemeProps> = ({
  onThemeChange = _onThemeChangeDefault
}) => {
  const parentDivRef = useRef<HTMLDivElement | null>(null);
  const onThemeChangeRef = useRef<(checked: boolean) => any>(onThemeChange);
  const [checked, setChecked] = useState<boolean>(false);
  const [focused, setFocused] = useState<boolean>(false);

  // Deps list has "focused" to limit extraneous setStates causing rerenders on every outside click
  const onParentClickOutside = useCallback(() => focused && setFocused(false), [
    focused,
  ]);

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

  const onToggleTheme = (): void => {
    !focused && setFocused(true);
    setChecked((prevChecked) => !prevChecked);
  };

  return (
    <ToggleContainer
      ref={parentDivRef}
      onClick={onToggleTheme}
    >
      <ToggleTrack checked={checked}>
        <div>
          <ToggleThemeIcon icon='sun'/>
        </div>
        <div>
          <ToggleThemeIcon icon='moon'/>
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