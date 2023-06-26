import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  left: 0;
  height: 134px;
  padding: 0.75rem 20px;
  position: absolute;
  background: ${({ theme }) => theme.white};
  z-index: 999;
  .buttonWrapper {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    > button {
      height: 1rem;
      background: none;
      color: ${({ theme }) => theme.gray500};
      font-size: ${({ theme }) => theme.fs14};
      display: flex;
      align-items: center;
      gap: 0.25rem;
      img {
        width: 1rem;
        height: 1rem;
      }
    }
  }
`;
