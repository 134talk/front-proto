import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .card_wrapper {
    display: flex;
    margin: 10rem auto;
  }
  .emotion_wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 0.5rem;
    width: 14rem;
  }
  > p {
    text-align: center;
    color: ${({ theme }) => theme.gray700};
    font-size: ${({ theme }) => theme.fs14};
    margin-top: 1.625rem;
  }
`;
