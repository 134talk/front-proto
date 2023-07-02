import { styled } from 'styled-components';

export const Container = styled.div<{ color: string }>`
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 2.75rem;
  background: ${({ color }) => color};
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 2.25rem;
    background: ${({ theme }) => theme.white};
    display: flex;
    align-items: center;
    justify-content: center;
    > p {
      font-size: 1.75rem;
    }
    > img {
      width: 1.75rem;
      height: 1.75rem;
      border-radius: 1.75rem;
    }
  }
`;
