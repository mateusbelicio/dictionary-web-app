import styled from 'styled-components';

const StyledRadioGroup = styled.fieldset`
  border: none;
  background: none;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function RadioGroup({ children, handleChange }) {
  return (
    <StyledRadioGroup onChange={(e) => handleChange(e.target.value)}>{children}</StyledRadioGroup>
  );
}

export default RadioGroup;
