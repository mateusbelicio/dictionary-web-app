import styled from 'styled-components';

import Heading from '../../ui/Heading';
import AudioPlayer from '../../ui/AudioPlayer';

const StyledWordHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

const Phonetic = styled.span`
  font-size: var(--fs-large);
  color: var(--clr-highlight);
  font-family: var(--ff-sans);
  margin-top: 0.5rem;
`;

function WordHeader({ word, phonetic, audioSrc }) {
  return (
    <StyledWordHeader>
      <div>
        <Heading as="h1">{word}</Heading>
        <Phonetic>{phonetic}</Phonetic>
      </div>
      <AudioPlayer src={audioSrc} />
    </StyledWordHeader>
  );
}

export default WordHeader;
