import { styled } from 'styled-components';

export const Container = styled.div`
  width: calc(100% - 1.25rem);
  padding: 1.6rem 1.25rem;
  border-radius: 20px;
  background: ${({ theme }) => theme.white};
  margin-top: 1.25rem;
  .subtitle {
    width: 100%;
    font-size: ${({ theme }) => theme.fs16};
    font-weight: ${({ theme }) => theme.fw600};
    color: ${({ theme }) => theme.gray900};
    line-height: 1.4;
    span {
      color: ${({ theme }) => theme.primary_deep_blue};
    }
  }
  .chartWrapper {
    margin-top: 1.25rem;
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
`;
