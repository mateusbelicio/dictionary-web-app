import styled, { css } from 'styled-components';

const Row = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;

  ${({ type }) =>
    type === 'horizontal' &&
    css`
      justify-content: space-between;
    `};
  ${({ type }) =>
    type === 'vertical' &&
    css`
      flex-direction: column;
    `};
`;

Row.defaultProps = {
  type: 'horizontal',
};

export default Row;
