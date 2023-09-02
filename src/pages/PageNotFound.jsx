import styled from 'styled-components';
import { useRouteError } from 'react-router-dom';
import { AlertTriangle, Frown } from 'lucide-react';

const StyledPageNotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  row-gap: 1.5rem;

  padding-block: 4rem;

  svg {
    display: block;
    height: 3rem;
    width: 3rem;
  }

  h1 {
    font-size: 1.125rem;
    font-weight: 700;
    margin-top: 1.25rem;
  }

  @media only screen and (min-width: 40em) {
    padding-block: 5rem;

    svg {
      width: 4rem;
      height: 4rem;
    }

    h1 {
      font-size: 1.25rem;
      color: var(--clr-title);
    }

    p {
      padding-inline: 0.875rem;
    }
  }
`;

const initialErrorState = {
  title: 'Unknown Error',
  message: 'Sorry, something went very wrong!',
  resolution: 'Try again later.',
};

function PageNotFound() {
  const routeError = useRouteError();

  const title = routeError?.title || initialErrorState.title;
  const message = routeError?.message || initialErrorState.message;
  const resolution = routeError?.resolution || initialErrorState.resolution;

  return (
    <StyledPageNotFound>
      <Frown color="#a445ed" strokeWidth={1.5} />
      <h1>{title}</h1>
      <p>{[message, resolution].join(' ')}</p>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
