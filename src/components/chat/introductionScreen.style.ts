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
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 1.625rem;
    }
    > p {
      font-size: 1rem;
      font-weight: 400;
      color: #475467;
      line-height: 1.3rem;
      margin-bottom: 1rem;
    }
  }
`;
