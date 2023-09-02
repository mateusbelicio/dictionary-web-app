import styled from 'styled-components';

const StyledLogo = styled.span`
  img {
    height: 2rem;
    flex-shrink: 0;
  }

  @media only screen and (min-width: 40em) {
    img {
      height: auto;
      width: 2rem;
    }
  }
`;

function Logo() {
  return (
    <StyledLogo>
      <img src="/logo.svg" alt="Dictionary web app logo" />
    </StyledLogo>
  );
}

export default Logo;
