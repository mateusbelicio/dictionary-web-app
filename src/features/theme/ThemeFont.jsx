import { useCallback, useEffect, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import styled from 'styled-components';

import { useTheme } from '../../contexts/ThemeContext';

import RadioInput from '../../ui/RadioInput';
import RadioGroup from '../../ui/RadioGroup';

const StyledThemeFont = styled.div`
  position: relative;
  color: inherit;
  font-weight: 700;

  button {
    border: none;
    background: none;
    color: inherit;
    cursor: pointer;

    display: flex;
    align-items: center;
    gap: 1rem;

    &:focus-visible {
      outline: 1px solid blueviolet;
      outline-offset: 3px;
    }

    svg {
      color: var(--clr-highlight);
    }

    @media screen and (min-width: 40em) {
      gap: 1.125rem;
    }
  }

  .modal {
    position: absolute;
    top: calc(100% + 1.125rem);
    right: 0;
    z-index: 10;

    background-color: var(--clr-modal);
    border: none;
    border-radius: 1rem;
    box-shadow: var(--shadow);
    padding: 1.5rem;
    width: 9.5rem;
  }
`;

const fontsLabel = {
  sans: 'Sans Serif',
  serif: 'Serif',
  mono: 'Mono',
};

function ThemeFont() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { font, setFont } = useTheme();

  const handleKeyPress = useCallback(
    (e) => e.key === 'Escape' && setIsModalOpen(false),
    [setIsModalOpen]
  );

  useEffect(() => {
    if (!isModalOpen) return;
    window.addEventListener('keydown', handleKeyPress);

    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isModalOpen]);

  return (
    <StyledThemeFont>
      <button onClick={() => setIsModalOpen((isOpen) => !isOpen)}>
        <span>{fontsLabel[font]}</span>
        {isModalOpen ? <ChevronUp /> : <ChevronDown />}
      </button>
      {isModalOpen && (
        <div className="modal">
          <RadioGroup handleChange={setFont}>
            <RadioInput
              group="font"
              label="Sans Serif"
              value="sans"
              defaultChecked={font === 'sans'}
            />
            <RadioInput
              group="font"
              label="Serif"
              value="serif"
              defaultChecked={font === 'serif'}
            />
            <RadioInput group="font" label="Mono" value="mono" defaultChecked={font === 'mono'} />
          </RadioGroup>
        </div>
      )}
    </StyledThemeFont>
  );
}

export default ThemeFont;
