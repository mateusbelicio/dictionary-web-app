import styled from 'styled-components';
import ThemeColor from '../features/theme/ThemeColor';
import ThemeFont from '../features/theme/ThemeFont';

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
      <ThemeFont />
      <ThemeColor />
    </StyledControls>
  );
}

export default Controls;
