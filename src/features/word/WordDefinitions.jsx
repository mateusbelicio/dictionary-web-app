import { useId } from 'react';
import styled from 'styled-components';

import Text from '../../ui/Text';
import Heading from '../../ui/Heading';

const StyledDefinitions = styled.div`
  & > :not(:first-child) {
    margin-top: 1rem;

    @media (min-width: 40em) {
      margin-top: 1.5rem;
    }
  }
`;

const DefinitionsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8125rem;
`;

const DefinitionsItem = styled.li`
  padding-left: 0.625rem;
  margin-left: 0.9375rem;

  @media (min-width: 40em) {
    margin-left: 2.5rem;
    padding-left: 0.4375rem;
  }

  &::marker {
    color: var(--clr-highlight);
  }

  & > :not(:first-child) {
    margin-top: 0.8125rem;

    &::before {
      content: open-quote;
    }

    &::after {
      content: close-quote;
    }
  }
`;

function WordDefinitions({ definitions }) {
  const id = useId();

  return (
    <StyledDefinitions className="meaning__list">
      <Heading as="h3">Meaning</Heading>
      <DefinitionsList>
        {definitions.map((def, index) => (
          <DefinitionsItem key={index + id} className="meaning__item">
            {def.definition && <Text>{def.definition}</Text>}
            {def.example && <Text $emphasis="low">{def.example}</Text>}
          </DefinitionsItem>
        ))}
      </DefinitionsList>
    </StyledDefinitions>
  );
}

export default WordDefinitions;
