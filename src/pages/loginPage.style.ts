import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 0 1.25rem;
  > img {
    width: 6.688rem;
    height: 6.25rem;
    margin-top: 10.75rem;
  }
  > p {
    color: ${({ theme }) => theme.white};
    font-size: ${({ theme }) => theme.fs18};
    font-weight: ${({ theme }) => theme.fw400};
    line-height: 1.3;
    text-align: center;
    margin-top: 0.5rem;
    &.bold {
      margin-top: 1.5rem;
      font-weight: ${({ theme }) => theme.fw600};
    }
  }
  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 2.5rem;
    :nth-child(2) {
      color: ${({ theme }) => theme.white};
      font-size: ${({ theme }) => theme.fs14};
      font-weight: ${({ theme }) => theme.fw500};
      margin: 2rem 0;
    }
  }
`;
