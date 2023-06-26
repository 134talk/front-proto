import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 5.625rem;
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.white};
  box-shadow: ${({ theme }) => `0 -2px 6px 0 ${theme.shadow}`};
  padding: 0 1.25rem;
  text-align: center;
  color: ${({ theme }) => theme.white};
  button {
    width: 5.234rem;
    height: 3.5rem;
    background: none;
    font-size: ${({ theme }) => theme.fs12};
    font-weight: ${({ theme }) => theme.fw700};
    color: ${({ theme }) => theme.gray800};
  }
  .badgeWrapper {
    position: relative;
    .badge {
      position: absolute;
      top: 0;
      right: 20px;
    }
  }
`;
