import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 0.625rem 1.25rem 1.25rem;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.white};
  cursor: pointer;
  > div {
    p {
      font-size: ${({ theme }) => theme.fs18};
      font-weight: ${({ theme }) => theme.fw600};
      color: ${({ theme }) => theme.gray900};
      &.summary {
        font-size: ${({ theme }) => theme.fs14};
        font-weight: ${({ theme }) => theme.fw400};
        color: ${({ theme }) => theme.primary_blue};
        margin-top: 0.5rem;
      }
    }
  }
  > img {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
