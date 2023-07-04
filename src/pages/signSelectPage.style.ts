import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.25rem 5.875rem 1.25rem;
  > p {
    color: ${({ theme }) => theme.primary_blue};
    font-size: ${({ theme }) => theme.fs18};
    font-weight: ${({ theme }) => theme.fw400};
    text-align: center;
    margin-top: 0.5rem;
    &.bold {
      margin-top: 1.5rem;
      font-weight: ${({ theme }) => theme.fw600};
    }
  }
  > img {
    width: 6.688rem;
    height: 6.25rem;
    margin-top: 10.75rem;
  }
`;
