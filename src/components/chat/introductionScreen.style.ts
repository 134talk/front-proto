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
    }
    > p {
      font-size: 1rem;
      font-weight: 400;
      color: #475467;
      margin-bottom: 1rem;
    }
  }
  .button_wrapper {
    padding: 3rem 1.25rem 0 1.25rem;
  }
`;
