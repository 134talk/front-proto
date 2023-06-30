import { styled } from 'styled-components';

export const Container = styled.div<{
  $isClickable: boolean;
  $isScrollable: boolean;
}>`
  width: ${({ $isScrollable }) =>
    $isScrollable ? 'calc(100% - 1.25rem)' : '100%'};
  min-width: ${({ $isScrollable }) =>
    $isScrollable ? 'calc(100% - 1.25rem)' : '100%'};
  height: auto;
  background: ${({ theme }) => theme.white};
  border-radius: 12px;
  padding: 1.25rem;
  cursor: ${({ $isClickable }) => $isClickable && 'pointer'};
  > section {
    display: flex;
    justify-content: space-between;
  }
  h1 {
    font-size: ${({ theme }) => theme.fs16};
    font-weight: ${({ theme }) => theme.fw600};
    color: ${({ theme }) => theme.gray900};
    padding-bottom: 1rem;
    &.title {
      font-size: ${({ theme }) => theme.fs18};
      padding-bottom: 0.25rem;
    }
  }
  span {
    color: ${({ theme }) => theme.primary_deep_blue};
    &.subTitle {
      font-size: ${({ theme }) => theme.fs14};
    }
    & .name {
      color: ${({ theme }) => theme.gray700};
      font-weight: ${({ theme }) => theme.fw400};
    }
  }
  .rankWrapper {
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
    p {
      min-width: 1.5rem;
      font-size: ${({ theme }) => theme.fs14};
      font-weight: ${({ theme }) => theme.fw600};
      color: ${({ theme }) => theme.primary_blue};
      &:nth-child(2) {
        font-weight: ${({ theme }) => theme.fw400};
        color: ${({ theme }) => theme.gray700};
      }
    }
  }
  .circleWrapper {
    width: 18.5rem;
    padding: 0rem 0.625rem;
    display: flex;
    gap: 1.8rem;
    flex-wrap: wrap;
  }
  .userWrapper {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
  .user {
    color: ${({ theme }) => theme.gray900};
    font-size: ${({ theme }) => theme.fs16};
    font-weight: ${({ theme }) => theme.fw700};
    span {
      color: ${({ theme }) => theme.gray700};
      font-size: ${({ theme }) => theme.fs12};
      font-weight: ${({ theme }) => theme.fw400};
    }
    .subText {
      color: ${({ theme }) => theme.gray700};
      font-size: ${({ theme }) => theme.fs14};
      font-weight: ${({ theme }) => theme.fw400};
      margin-top: 0.25rem;
    }
  }
  .emotionWrapper {
    width: 100%;
    display: flex;
    margin-top: 0.88rem;
  }
  .chartWrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
