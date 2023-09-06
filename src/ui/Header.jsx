import styled from 'styled-components';

import Logo from './Logo';
import Row from './Row';
import Search from './Search';
import Controls from './Controls';

const StyledHeader = styled.header`
  /* background-color: var(--clr-bg); */
  display: grid;
  grid-template-columns: initial;
  padding-block: 1.5rem;
  row-gap: 1.5rem;

  @media only screen and (min-width: 32em) {
    row-gap: 3.25rem;
    padding-block: 3.625rem 3.125rem;
  }

  @media only screen and (min-width: 40em) {
    padding-block: 3.625rem 2.75rem;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <Row>
        <Logo />
        <Controls />
      </Row>
      <Search />
    </StyledHeader>
  );
}

export default Header;
