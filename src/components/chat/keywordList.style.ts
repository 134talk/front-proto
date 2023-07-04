import { styled } from 'styled-components';

export const Container = styled.div`
  width: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  > div {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    > img {
      width: 6.5rem;
      z-index: 1;
    }
    > p {
      position: fixed;
      text-align: center;
      color: ${({ theme }) => theme.white};
      font-size: ${({ theme }) => theme.fs16};
    }
  }
`;
