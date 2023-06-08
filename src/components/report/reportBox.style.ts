import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 0.625rem 1.25rem 1.25rem;
  border-radius: 12px;
  background-color: #ffffff;
  cursor: pointer;
  > div {
    p {
      font-size: 1.125rem;
      font-weight: 600;
      color: #111111;
      &.summary {
        font-size: 0.875rem;
        font-weight: 400;
        color: #7588ea;
        margin-top: 0.5rem;
      }
    }
  }
  > img {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
