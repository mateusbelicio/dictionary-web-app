import styled from 'styled-components';

const StyledPageNotFound = styled.div`
  display: grid;
  justify-items: center;
  text-align: center;
  row-gap: 1.5rem;

  padding-block: 4rem;

  img {
    display: block;
    aspect-ratio: 1;
    width: 3rem;
  }

  h1 {
    font-size: 1.125rem;
    font-weight: 700;
  }

  @media only screen and (min-width: 40em) {
    padding-block: 5rem;

    img {
      width: 4rem;
    }

    h1 {
      font-size: 1.25rem;
    }
  }
`;

function PageNotFound() {
  return (
    <StyledPageNotFound className="not-found">
      <img className="not-found__icon" src="" alt="" aria-hidden="true" />
      <h1 className="not-found__title">No Definitions Found</h1>
      <p className="not-found__message">
        Sorry pal, we couldn't find definitions for the word you were looking for. You can try the
        search again at later time or head to the web instead.
      </p>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
