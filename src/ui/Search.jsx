import { useState } from 'react';
import { useSubmit } from 'react-router-dom';
import styled from 'styled-components';

import icons from '../assets/icons.svg';

const StyledSearch = styled.form`
  --padding-left: 1.5rem;
  --padding-right: 3rem;
  --padding-block: 1rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;

  font-size: 1rem;
  line-height: 1.5rem;

  @media only screen and (min-width: 40em) {
    --padding-block: 1.25rem;
    --padding-right: 3rem;

    font-size: 1.25rem;
  }

  input {
    flex-grow: 1;

    background-color: var(--clr-input);
    border-radius: 1rem;
    border: none;
    caret-color: var(--clr-accent-400);
    color: currentColor;
    font-weight: 700;
    padding: var(--padding-block) var(--padding-right) var(--padding-block) var(--padding-left);
    text-transform: lowercase;
    transition: background-color 0.3s;

    &:focus-visible {
      outline: 1px solid var(--clr-accent-400);
    }

    &::placeholder {
      opacity: 0.25;
      text-transform: none;
    }

    &[data-invalid='true'] {
      outline: 1px solid var(--clr-error-400);
    }
  }

  & > span {
    display: block;
    position: absolute;
    top: calc(100% + 0.5rem);

    font-size: 0.75rem;
    line-height: 1;
    color: var(--clr-error-400);

    @media only screen and (min-width: 40em) {
      font-size: 0.875rem;
    }
  }

  button {
    position: absolute;
    right: calc(var(--padding-left) - 0.5rem);
    top: 50%;
    transform: translateY(-50%);
    box-sizing: content-box;

    border: none;
    background: none;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover,
    &:focus-visible {
      background-color: var(--clr-bg);
    }

    &:focus-visible {
      outline: 1px solid var(--clr-accent-400);
    }

    svg {
      display: block;
      width: 1rem;
      height: 1rem;
    }
  }
`;

function Search() {
  const [query, setQuery] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);
  const submit = useSubmit();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return setIsInvalid(true);

    const searchParams = new URLSearchParams();
    searchParams.append('q', query);

    setQuery('');
    submit(searchParams, { method: 'GET', action: '/search' });
  };

  const handleInputChange = (e) => {
    setIsInvalid(false);
    setQuery(e.target.value);
  };

  return (
    <StyledSearch onSubmit={handleSubmit} autoComplete="off">
      <input
        type="text"
        id="search"
        aria-label="Search word"
        name="q"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for any word..."
        data-invalid={isInvalid}
      />
      <button type="submit">
        <svg>
          <use xlinkHref={`${icons}#icon-search`} />
        </svg>
      </button>
      <span>{isInvalid ? 'Whoops, can’t be empty...' : ''}</span>
    </StyledSearch>
  );
}

export default Search;
