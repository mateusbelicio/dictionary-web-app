import styled, { css } from 'styled-components';

const Row = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;

  ${({ type }) =>
    type === 'horizontal' &&
    css`
      align-items: center;
    `};
  ${({ type }) =>
    type === 'vertical' &&
    css`
      flex-direction: column;
    `};
  ${({ spaceBetween }) =>
    spaceBetween &&
    css`
      justify-content: space-between;
    `};
`;

Row.defaultProps = {
  type: 'horizontal',
  spaceBetween: false,
};

export default Row;
