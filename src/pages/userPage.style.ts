import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Scroll = styled.div<{ $isMobile: boolean }>`
  width: 100%;
  height: ${({ $isMobile }) => ($isMobile ? '100vh' : '680px')};
  background: ${({ theme }) => theme.gray100};
  padding: 3rem 1.25rem 15rem 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
