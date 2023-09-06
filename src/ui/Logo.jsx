import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logoImage from '../assets/logo.svg';

const StyledLogo = styled(Link)`
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
    <StyledLogo to="/">
      <img src={logoImage} alt="Dictionary web app logo" />
    </StyledLogo>
  );
}

export default Logo;
