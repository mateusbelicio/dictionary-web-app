import styled from 'styled-components';

import { playAudio } from '../utils/playAudio';

const StyledAudioPlayer = styled.button`
  flex-shrink: 0;
  align-self: center;
  aspect-ratio: 1;
  cursor: pointer;
  width: 3rem;

  border: none;
  border-radius: 50%;
  background-color: var(--clr-accent-300);

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 250ms;

  &::after {
    content: '';
    display: block;
    aspect-ratio: 1;
    width: 0.8125rem;

    background-color: var(--clr-accent-400);
    clip-path: polygon(0 0, 100% 50%, 0 100%);
    transform: translateX(2px);
    transition: background-color 250ms;
  }

  &:focus-visible,
  &:hover {
    background-color: var(--clr-accent-400);
    outline: none;
  }

  &:focus-visible::after,
  &:hover::after {
    background-color: var(--clr-neutral-100);
    outline: none;
  }

  @media only screen and (min-width: 40em) {
    width: 4.6875rem;

    &::after {
      width: 1.3125rem;
    }
  }
`;

export default function AudioPlayer({ src }) {
  return (
    <StyledAudioPlayer className="audio-btn" onClick={() => playAudio(src)}>
      <span className="sr-only">Play audio</span>
    </StyledAudioPlayer>
  );
}
