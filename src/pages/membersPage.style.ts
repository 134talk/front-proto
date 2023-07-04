import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem 1.25rem 0 1.25rem;
  .notFound {
    width: 100%;
    font-size: ${({ theme }) => theme.fs14};
    color: ${({ theme }) => theme.gray700};
    text-align: center;
    margin: 15rem auto;
  }
`;

export const Scroll = styled.div<{ $isMobile: boolean }>`
  width: 100%;
  height: ${({ $isMobile }) => ($isMobile ? 'calc(100vh - 11.5rem)' : '600px')};
  padding-top: 24px;
  padding-bottom: 6rem;
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
