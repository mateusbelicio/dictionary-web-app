import styled from 'styled-components';

const StyledControls = styled.div`
  display: flex;
  align-items: center;

  & > :not(:first-child) {
    padding-left: 1rem;
    margin-left: 1rem;

    border-left: 1px solid var(--clr-line);
  }
`;

function Controls() {
  return (
    <StyledControls>
      <span>Font control</span>
      <span>Theme control</span>
    </StyledControls>
  );
}

export default Controls;
