import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import Header from './Header';

const StyledAppLayout = styled.div`
  --padding: 1.5rem;

  display: grid;
  min-height: 100dvh;
  grid-template-columns:
    [full-start] minmax(var(--padding), 1fr) [center-start]
    minmax(var(--min-width), var(--max-width))
    [center-end] minmax(var(--padding), 1fr) [full-end];
  grid-template-rows: auto 1fr;

  @media only screen and (min-width: 40em) {
    --padding: 2.5rem;
  }

  & > * {
    grid-column: center;
  }
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Outlet />
    </StyledAppLayout>
  );
}

export default AppLayout;
