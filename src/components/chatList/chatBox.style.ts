import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0.75rem 1.25rem;
  background: ${({ theme }) => theme.white};
  border-radius: 8px;
  > .wrapper {
    display: flex;
    gap: 0.3rem;
    > p {
      font-size: ${({ theme }) => theme.fs16};
      color: ${({ theme }) => theme.gray900};
      font-weight: ${({ theme }) => theme.fw500};
    }
  }
  > .users {
    font-size: ${({ theme }) => theme.fs14};
    color: ${({ theme }) => theme.gray600};
    margin-top: 0.5rem;
  }
  > .emoticons {
    display: flex;
    margin-top: 0.7rem;
  }
`;
