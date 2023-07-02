import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding-top: 0.75rem;
`;

export const Scroll = styled.div<{ $isMobile: boolean }>`
  width: 100%;
  height: ${({ $isMobile }) => ($isMobile ? 'calc(100vh - 11.5rem)' : '558px')};
  margin-top: 1rem;
  padding-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
