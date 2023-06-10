import { styled } from 'styled-components';

export const Container = styled.div`
  padding: 0.75rem 1.25rem;
  border: ${({ theme }) => `1px solid ${theme.gray300}`};
  border-radius: 8px;
  .wrapper {
    display: flex;
    gap: 0.3rem;
    > p {
      font-size: ${({ theme }) => theme.fs16};
      color: ${({ theme }) => theme.gray900};
      font-weight: ${({ theme }) => theme.fw500};
    }
  }
  .users {
    font-size: ${({ theme }) => theme.fs14};
    color: ${({ theme }) => theme.gray600};
  }
  .emotions {
    font-size: ${({ theme }) => theme.fs12};
    color: ${({ theme }) => theme.gray600};
    margin-top: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    p > span {
      font-weight: ${({ theme }) => theme.fw700};
    }
    img {
      width: 1.37rem;
      height: 1.37rem;
    }
  }
`;
