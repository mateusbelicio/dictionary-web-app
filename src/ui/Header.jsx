import styled from 'styled-components';

import Logo from './Logo';
import Row from './Row';
import Search from './Search';

const StyledHeader = styled.header`
  padding-block: 1.5rem 1rem;
  display: block;

  @media only screen and (min-width: 40em) {
    row-gap: 3.25rem;
    padding-block: 3.625rem 2.75rem;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <Row type="vertical">
        <Row spaceBetween={true}>
          <Logo />
          <span>Controls</span>
        </Row>
        <Search />
      </Row>
    </StyledHeader>
  );
}

export default Header;
