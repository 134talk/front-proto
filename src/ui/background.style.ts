import { styled } from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.gradation_primary};
  z-index: -999;
`;
