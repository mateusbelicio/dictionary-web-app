import { styled } from 'styled-components';
import { useTheme } from '../../contexts/ThemeContext';

import icons from '../../assets/icons.svg';

const StyledThemeColor = styled.div`
  display: flex;
  align-items: center;
  isolation: isolate;
  color: var(--clr-gray);

  &[data-dark='true'] {
    color: var(--clr-highlight);
  }

  svg {
    display: inline-block;
    height: 1.25rem;
    width: 1.25rem;
    line-height: 0;
    margin-left: 0.75rem;
  }

  input {
    appearance: none;

    &:focus-visible {
      outline: none;
    }

    &:focus-visible + label {
      outline: 1px solid blueviolet;
      outline-offset: 3px;
    }

    &:checked + label,
    label:hover {
      background-color: blueviolet;
    }

    &:checked + label::after {
      margin-left: auto;
    }
  }

  label {
    --padding: 3px;

    aspect-ratio: 2 / 1;
    width: 2.5rem;

    position: relative;

    background-color: var(--clr-neutral-400);
    border-radius: 5rem;
    user-select: none;
    cursor: pointer;

    &::after {
      content: '';
      position: absolute;
      inset: var(--padding);
      width: calc(50% - (var(--padding) * 2));

      background-color: white;
      border-radius: inherit;

      transition: all 0.2s;
    }

    &:active::after {
      width: calc(60% - (var(--padding) * 2));
    }
  }
`;

function ThemeColor() {
  const { color, setColor } = useTheme();

  const toggleTheme = () => {
    setColor(color === 'dark' ? 'light' : 'dark');
  };

  return (
    <StyledThemeColor data-dark={color === 'dark'}>
      <input type="checkbox" id="theme" checked={color === 'dark'} onChange={toggleTheme} />
      <label htmlFor="theme">
        <span className="sr-only">Toggle dark mode</span>
      </label>
      <svg>
        <use xlinkHref={`${icons}#icon-moon`} />
      </svg>
    </StyledThemeColor>
  );
}

export default ThemeColor;
