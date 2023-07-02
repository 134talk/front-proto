import { styled } from 'styled-components';

export const Container = styled.div<{ display: string }>`
  display: ${({ display }) => display};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
`;
