import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Scroll = styled.div<{ $isMobile: boolean }>`
  width: 100%;
  height: ${({ $isMobile }) => ($isMobile ? '100vh' : '680px')};
  padding-bottom: ${({ $isMobile }) => ($isMobile ? '20rem' : '5rem')};
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
