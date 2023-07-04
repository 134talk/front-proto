import { styled } from 'styled-components';

export const Container = styled.div<{ $isRow: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${({ $isRow }) => ($isRow ? '1rem' : '1.25rem')};
  margin: ${({ $isRow }) => ($isRow ? '0' : '0 auto')};
  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    > img {
      width: 1rem;
      height: 1rem;
    }
  }
`;
