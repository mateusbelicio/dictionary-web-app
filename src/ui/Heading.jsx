import styled, { css } from 'styled-components';

const variations = {
  h1: css`
    font-size: var(--fs-huge);
    font-weight: 700;
    line-height: 1.21;
    color: var(--clr-body);
  `,
  h2: css`
    font-size: var(--fs-large);
    font-weight: 700;
    line-height: 1.2;
    color: var(--clr-body);
  `,
  h3: css`
    font-size: var(--fs-medium);
    font-weight: 400;
    line-height: 1.05;
    color: var(--clr-gray);
  `,
  h4: css`
    font-size: var(--fs-small);
    font-weight: 400;
    line-height: 1.05;
    color: var(--clr-gray);
  `,
};

const Heading = styled.h1`
  ${(props) => variations[props.as]};
  ${(props) =>
    props.$emphasis &&
    css`
      font-weight: 700;
      color: var(--clr-body);
    `};
`;

Heading.defaultProps = {
  as: 'h3',
  $emphasis: false,
};

export default Heading;
