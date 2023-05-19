import { styled } from 'styled-components';

export const Container = styled.div`
  padding: 0.75rem 1.25rem;
  border: 1px solid #d5dae0;
  border-radius: 8px;
  .wrapper {
    display: flex;
    gap: 0.3rem;
    font-size: 1rem;
    color: #000000;
    font-weight: 500;
    &:nth-child(2) {
      margin-top: 0.4rem;
      font-size: 0.75rem;
      color: #475467;
      font-weight: 400;
    }
  }
`;
