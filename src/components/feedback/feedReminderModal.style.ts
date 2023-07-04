import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-top: 1rem;
  > p {
    font-size: 1.125rem;
    font-weight: 700;
    text-align: center;
    letter-spacing: -0.025em;
  }
  > div {
    display: flex;
    gap: 0.5rem;
  }
`;
