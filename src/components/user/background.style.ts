import { styled } from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.gray100};
  position: absolute;
  top: 14.5rem;
  left: 0;
  bottom: 0;
  width: calc(100% + 1.25rem * 2);
  min-height: calc(100% - 30rem);
  z-index: -999;
`;
