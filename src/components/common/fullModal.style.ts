import { styled } from 'styled-components';

export const Background = styled.div`
  z-index: 1;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.white};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Container = styled.div`
  width: calc(100% - 1.25rem * 2);
  height: 100%;
  position: absolute;
  z-index: 100;
`;
