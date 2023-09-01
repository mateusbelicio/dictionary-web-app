import styled from 'styled-components';

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: max-content 1fr;
  align-items: center;
  row-gap: 1.5rem;

  padding-block: 1.5rem 1rem;

  & > img {
    height: 2rem;
  }

  @media only screen and (min-width: 40em) {
    row-gap: 3.25rem;
    padding-block: 3.625rem 2.75rem;

    & > img {
      height: auto;
      width: 2rem;
    }
  }
`;

function Header() {
  return <StyledHeader>HEADER</StyledHeader>;
}

export default Header;
