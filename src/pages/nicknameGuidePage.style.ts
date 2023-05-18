import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 11.688rem 0 11.938rem 0;
  > p {
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    color: #000000;
  }
  section {
    margin: 4.5rem 0 3.125rem 0;
    p {
      font-size: 1rem;
      font-weight: 400;
      text-align: center;
      line-height: 1.3rem;
      color: #4a413c;
      &:last-child {
        margin-top: 2rem;
      }
      span {
        font-weight: 700;
        color: #f58548;
      }
    }
  }
`;
