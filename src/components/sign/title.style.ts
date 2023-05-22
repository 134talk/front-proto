import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin: 2.5rem 0 2.125rem 0;
  img {
    width: 2.563rem;
    height: 2.563rem;
  }
  span {
    font-size: 1.5rem;
    font-weight: 700;
    color: #000000;
  }
`;
