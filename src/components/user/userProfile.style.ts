import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  left: 0;
  height: 134px;
  padding: 0.75rem 20px;
  position: absolute;
  background: ${({ theme }) => theme.white};
  z-index: 999;
  > button {
    width: 5.5rem;
    height: 1rem;
    background: none;
    color: ${({ theme }) => theme.gray500};
    font-size: ${({ theme }) => theme.fs14};
    display: flex;
    align-items: center;
    gap: 0.25rem;
    margin-left: calc(100% - 5rem);
    img {
      width: 1rem;
      height: 1rem;
    }
  }
`;
