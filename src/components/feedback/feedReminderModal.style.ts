import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-top: 1rem;
  > p {
    font-size: ${({ theme }) => theme.fs18};
    font-weight: ${({ theme }) => theme.fw700};
    letter-spacing: -0.025em;
    text-align: center;
  }
  > div {
    display: flex;
    gap: 0.5rem;
  }
`;
