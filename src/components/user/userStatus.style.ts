import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  > section {
    padding: 1.25rem;
    background: ${({ theme }) => theme.white};
    border-radius: 12px;
    margin-top: 1.25rem;
    > p {
      font-size: ${({ theme }) => theme.fs18};
      color: ${({ theme }) => theme.gray900};
      font-weight: ${({ theme }) => theme.fw600};
      text-align: right;
      margin-top: 0.5rem;
      &:first-child {
        font-size: ${({ theme }) => theme.fs16};
        color: ${({ theme }) => theme.gray600};
        font-weight: ${({ theme }) => theme.fw400};
        text-align: left;
        margin-top: 0;
      }
    }
  }
`;
