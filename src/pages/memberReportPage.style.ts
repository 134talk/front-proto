import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0 1.25rem;
  div {
    & :last-child {
      border-bottom: none;
    }
  }
  .bubbleWrapper {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
  .contentWrapper {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
`;

export const Scroll = styled.div<{ $isMobile: boolean }>`
  width: 100%;
  height: ${({ $isMobile }) => ($isMobile ? '100vh' : '680px')};
  padding-bottom: ${({ $isMobile }) => ($isMobile ? '20rem' : '5rem')};
  gap: 1.2rem;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  > p {
    color: ${({ theme }) => theme.gray900};
    font-size: ${({ theme }) => theme.fs16};
    font-weight: ${({ theme }) => theme.fw700};
    padding: 1.5rem 0;
    span {
      color: ${({ theme }) => theme.primary_deep_blue};
      &.name {
        color: ${({ theme }) => theme.gray700};
        font-size: ${({ theme }) => theme.fs14};
        font-weight: ${({ theme }) => theme.fw400};
      }
    }
  }
`;
