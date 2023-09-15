import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  .text_wrapper {
    height: 6rem;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    p {
      &.main_text {
        text-align: center;
        letter-spacing: -0.025em;
        font-size: ${({ theme }) => theme.fs18};
        font-weight: ${({ theme }) => theme.fw700};
        margin-bottom: 0.5rem;
      }
      text-align: center;
      letter-spacing: -0.025em;
      font-size: ${({ theme }) => theme.fs14};
      font-weight: ${({ theme }) => theme.fw400};
    }
  }
  .main_text {
    text-align: center;
    letter-spacing: -0.025em;
    font-size: ${({ theme }) => theme.fs18};
    font-weight: ${({ theme }) => theme.fw700};
    margin-bottom: 0.5rem;
  }
`;
