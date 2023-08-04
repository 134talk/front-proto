import { styled } from 'styled-components';

export const Container = styled.div`
  z-index: 999;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.backdrop};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 20px;
    width: 19.69rem;
    min-height: 11.5rem;
    background: ${({ theme }) => theme.white};
    padding: 1.7rem 1.875rem;
    > section {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      img {
        cursor: pointer;
      }
    }
  }
`;
