import styled from 'styled-components';
import { Link } from 'react-router-dom';

import LinkButton from '../../ui/LinkButton';
import Heading from '../../ui/Heading';

const StyledRelated = styled.div`
  display: flex;
  column-gap: 1.5rem;
  row-gap: 0.8125rem;
  align-items: baseline;
`;

const RelatedList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
  row-gap: 0.25rem;
`;

const RelatedItem = styled.li`
  &:not(:last-child)::after {
    content: ',';
    color: var(--clr-highlight);
  }

  a {
    white-space: nowrap;
  }
`;

function WordRelated({ relations, title }) {
  if (relations.length === 0) return null;

  return (
    <StyledRelated>
      <Heading as="h3">{title}</Heading>
      <RelatedList>
        {relations.map((relation) => (
          <RelatedItem key={relation}>
            <LinkButton as={Link} to={`/search?q=${relation.replace(' ', '+')}`} key={relation}>
              {relation}
            </LinkButton>
          </RelatedItem>
        ))}
      </RelatedList>
    </StyledRelated>
  );
}

export default WordRelated;
