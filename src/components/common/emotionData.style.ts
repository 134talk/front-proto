import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 0.3rem;
  align-items: center;
  > img {
    width: 1.5rem;
    height: 1.5rem;
  }
  > p {
    color: ${({ theme }) => `${theme.gray600}`};
    font-size: ${({ theme }) => `${theme.fs12}`};
    font-weight: ${({ theme }) => `${theme.fw400}`};
    span {
      color: ${({ theme }) => `${theme.gray600}`};
      font-weight: ${({ theme }) => `${theme.fw700}`};
    }
  }
`;
