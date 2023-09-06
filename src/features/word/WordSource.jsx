import styled from 'styled-components';
import { ExternalLink } from 'lucide-react';

import Heading from '../../ui/Heading';

const StyledWordSource = styled.footer`
  display: flex;
  gap: 1.5rem;
  align-items: baseline;

  padding-block: 1.5rem 4rem;
  border-top: 1px solid var(--clr-line);
`;

const SourceLink = styled.a`
  color: var(--clr-body);
  text-decoration: none;
  transition: color 0.2s;
  text-decoration: underline;
  word-break: break-all;

  display: flex;
  align-items: baseline;
  gap: 1rem;

  svg {
    width: 0.75rem;
    height: 0.75rem;
    flex-shrink: 0;
  }

  &:hover {
    color: var(--clr-highlight);
  }
`;

function WordSource({ src }) {
  return (
    <StyledWordSource>
      <Heading as="h4">Source</Heading>
      <SourceLink href={src} target="_blank">
        {src}
        <ExternalLink />
      </SourceLink>
    </StyledWordSource>
  );
}

export default WordSource;
