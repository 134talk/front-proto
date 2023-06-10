import { styled } from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  width: calc(100% + 1.25rem * 2);
  min-height: 100vh;
  background: ${({ theme }) => theme.gradation_primary};
  z-index: -999;
`;
