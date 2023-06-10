import { styled } from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.gray100};
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% + 1.25rem * 2);
  min-height: 100vh;
  z-index: -999;
`;
