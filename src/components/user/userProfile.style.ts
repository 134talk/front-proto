import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 8rem;
  padding: 0.75rem 0;
  background: #ffffff;
  z-index: 999;
  > button {
    width: 5rem;
    height: 1rem;
    background: none;
    color: #98a2b3;
    font-size: 0.875rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: calc(100% - 5rem);
    img {
      width: 1rem;
      height: 1rem;
    }
  }
`;
