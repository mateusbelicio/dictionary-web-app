import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Text from './Text';

const StyledLinkButton = styled(Text)`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 1px solid var(--clr-highlight);
    outline-offset: 2px;
  }
`;

function LinkButton({ children, to }) {
  return (
    <StyledLinkButton $emphasis="high" $size="medium" as={Link} to={to}>
      {children}
    </StyledLinkButton>
  );
}

export default LinkButton;
