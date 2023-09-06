import styled from 'styled-components';

const StyledRadioInput = styled.label`
  cursor: pointer;

  &:hover {
    color: var(--clr-highlight);
  }

  input[type='radio'] {
    appearance: none;
    outline: transparent;

    &:focus-visible + span {
      text-decoration: underline;
    }

    &:checked + span {
      color: var(--clr-highlight);
    }

    &[value='sans'] + span {
      font-family: var(--ff-sans);
    }

    &[value='serif'] + span {
      font-family: var(--ff-serif);
    }

    &[value='mono'] + span {
      font-family: var(--ff-mono);
    }
  }
`;

function RadioInput({ group, label, value, ...rest }) {
  return (
    <StyledRadioInput htmlFor={value}>
      <input id={value} type="radio" name={group} value={value} {...rest} />
      <span>{label}</span>
    </StyledRadioInput>
  );
}

export default RadioInput;
