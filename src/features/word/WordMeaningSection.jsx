import styled from 'styled-components';

import Heading from '../../ui/Heading';
import WordDefinitions from './WordDefinitions';
import WordRelated from './WordRelated';

const StyledMeaningSection = styled.section`
  display: grid;
  row-gap: 2rem;

  @media (min-width: 40em) {
    row-gap: 2.625rem;
  }
`;

const Title = styled(Heading)`
  display: flex;
  align-items: center;
  gap: 1rem;

  font-style: italic;

  &::after {
    content: '';
    width: 100%;
    flex-grow: 1;
    height: 1px;
    background-color: var(--clr-line);
  }

  @media (min-width: 40em) {
    gap: 1.5rem;
  }
`;

function WordMeaningSection({ meaning }) {
  const name = meaning.partOfSpeech;
  const definitions = meaning.definitions;
  const synonyms = meaning.synonyms;
  const antonyms = meaning.antonyms;

  return (
    <StyledMeaningSection>
      <Title as="h2">{name}</Title>

      <WordDefinitions definitions={definitions} />
      <WordRelated title="Synonyms" relations={synonyms} />
      <WordRelated title="Antonyms" relations={antonyms} />
    </StyledMeaningSection>
  );
}

export default WordMeaningSection;
