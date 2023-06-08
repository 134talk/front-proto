import { styled } from 'styled-components';

export const Container = styled.div`
  padding: 0.75rem 1.25rem;
  border: 1px solid #d5dae0;
  border-radius: 8px;
  .wrapper {
    display: flex;
    gap: 0.3rem;
    > p {
      font-size: 1rem;
      color: #000000;
      font-weight: 500;
    }
  }
  .users {
    font-size: 0.85rem;
    color: #667085;
  }
  .emotions {
    font-size: 0.75rem;
    color: #667085;
    margin-top: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    p > span {
      font-weight: 700;
    }
    img {
      width: 1.37rem;
      height: 1.37rem;
    }
  }
`;
