import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Scroll = styled.div<{ $isMobile: boolean }>`
  width: 100%;
  height: ${({ $isMobile }) => ($isMobile ? 'calc(100vh - 9rem)' : '630px')};
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
