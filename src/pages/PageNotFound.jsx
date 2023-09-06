import styled from 'styled-components';
import { Frown } from 'lucide-react';
import { Link, useRouteError } from 'react-router-dom';

import Heading from '../ui/Heading';

const StyledPageNotFound = styled.div`
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
    display: block;
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

    p {
      & > :not(:first-child) {
        margin-left: 1ch;
      }
    }

    a {
      color: var(--clr-accent-400);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const initialErrorState = {
  title: 'Unknown Error',
  message: 'Sorry, something went very wrong!',
  resolution: 'Head over to the homepage or go back to previous page.',
};

function PageNotFound() {
  const routeError = useRouteError();

  const message = routeError?.message || routeError?.error?.message || initialErrorState.message;
  const resolution = routeError?.resolution || initialErrorState.resolution;
  const title =
    routeError?.title ||
    [routeError?.status, routeError?.statusText].join(' - ') ||
    initialErrorState.title;

  return (
    <StyledPageNotFound>
      <Frown color="#a445ed" strokeWidth={1.5} />
      <Heading as="h3" $emphasis={true}>
        {title}
      </Heading>
      <p>
        <span>{message}</span>
        <span>{resolution}</span>
      </p>

      {title !== 'No Definitions Found' && <Link to={-1}>Go back</Link>}
    </StyledPageNotFound>
  );
}

export default PageNotFound;
