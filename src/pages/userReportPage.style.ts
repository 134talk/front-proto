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
  height: ${({ $isMobile }) => ($isMobile ? 'calc(100vh - 3.5rem)' : '678px')};
  padding-bottom: 4rem;
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
    text-align: center;
    padding: 1.5rem 0;
    margin-left: -1.25rem;
    span {
      color: ${({ theme }) => theme.primary_deep_blue};
    }
  }
`;
