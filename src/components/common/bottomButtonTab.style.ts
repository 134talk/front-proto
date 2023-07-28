import { styled } from 'styled-components';

export const Container = styled.div<{ $height: string }>`
  width: 100%;
  height: ${({ $height }) => ($height ? $height : '6.75rem')};
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.white};
  box-shadow: ${({ theme }) => `0 -2px 6px 0 ${theme.shadow}`};
  padding: 0.75rem 1.25rem;
  text-align: center;
  color: ${({ theme }) => theme.white};
  z-index: 100;
`;
