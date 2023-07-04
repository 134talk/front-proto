import { styled } from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  .intro_wrapper {
    display: flex;
    flex-direction: column;
    margin: 1.625rem auto;
    text-align: center;
    gap: 0.625rem;
    > h2 {
      font-size: ${({ theme }) => theme.fs20};
      font-weight: ${({ theme }) => theme.fw700};
    }
    > p {
      font-size: ${({ theme }) => theme.fs16};
      font-weight: ${({ theme }) => theme.fw400};
      color: ${({ theme }) => theme.gray700};
      margin-bottom: 1rem;
    }
  }
  .button_wrapper {
    padding: 3rem 1.25rem 0 1.25rem;
  }
`;
