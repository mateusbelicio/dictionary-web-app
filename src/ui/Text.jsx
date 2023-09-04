import styled, { css } from 'styled-components';

const sizes = {
  small: css`
    font-size: var(--fs-small);
  `,
  normal: css`
    font-size: var(--fs-base);
  `,
  medium: css`
    font-size: var(--fs-medium);
  `,
  large: css`
    font-size: var(--fs-large);
  `,
};

const emphasis = {
  low: css`
    font-weight: 400;
    color: var(--clr-gray);
  `,
  normal: css`
    font-weight: 400;
    color: var(--clr-body);
  `,
  high: css`
    font-weight: 700;
    color: var(--clr-highlight);
  `,
};

const Text = styled.p`
  line-height: 1.6;

  ${(props) => sizes[props.$size]};
  ${(props) => emphasis[props.$emphasis]};

  @media (min-width: 40em) {
    line-height: 1.333;
  }
`;

Text.defaultProps = {
  $size: 'normal',
  $emphasis: 'normal',
};

export default Text;
