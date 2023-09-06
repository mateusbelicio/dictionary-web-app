import { useEffect } from 'react';
import styled from 'styled-components';

import Logo from '../ui/Logo';
import Heading from '../ui/Heading';
import Text from '../ui/Text';

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  row-gap: 1.5rem;

  max-width: var(--max-width);

  padding-block: 4rem;
  padding-inline: 0.875rem;
  margin-inline: auto;

  svg {
    height: 3rem;
    width: 3rem;
    margin-bottom: 1.25rem;
  }

  @media only screen and (min-width: 40em) {
    padding-block: 5rem;

    svg {
      width: 4rem;
      height: 4rem;
    }
  }
`;

function Home() {
  return (
    <StyledHome>
      <Logo />
      <Heading as="h2">Welcome to Dictionary App</Heading>
      <Text>Start searching for any word...</Text>
    </StyledHome>
  );
}

export default Home;
