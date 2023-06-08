import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  > section {
    padding: 1.25rem;
    background: #ffffff;
    border-radius: 12px;
    margin-top: 1.25rem;
    > p {
      font-size: 1.125rem;
      color: #111111;
      font-weight: 600;
      text-align: right;
      margin-top: 0.5rem;
      &:first-child {
        font-size: 1rem;
        color: #667085;
        font-weight: 400;
        text-align: left;
        margin-top: 0;
      }
    }
  }
`;
