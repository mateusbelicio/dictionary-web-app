import { keyframes, styled } from 'styled-components';
import icons from '../assets/icons.svg';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const StyledLoader = styled.div`
  position: fixed;
  inset: 0;
  background-color: var(--clr-backdrop);
  backdrop-filter: blur(1px);
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    aspect-ratio: 1;
    width: 3rem;
    opacity: 1;

    animation: ${spin} 1s cubic-bezier(0.39, 0.575, 0.565, 1) infinite;
  }
`;

export default function Loader() {
  return (
    <StyledLoader>
      <svg>
        <use xlinkHref={`${icons}#icon-spinner`} />
      </svg>
    </StyledLoader>
  );
}
