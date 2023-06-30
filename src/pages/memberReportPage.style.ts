import { styled } from 'styled-components';

export const Container = styled.div`
  section {
    position: absolute;
    height: 100%;
    overflow: auto;
    padding-bottom: 10rem;
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
  }
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
