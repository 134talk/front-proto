import { styled } from 'styled-components';

export const Container = styled.div`
  color: ${({ theme }) => theme.gray900};
  font-size: ${({ theme }) => theme.fs14};
  border-bottom: ${({ theme }) => `1px dashed ${theme.gray200}`};
  .wrapper {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    margin-top: 0.75rem;
    padding-bottom: 0.8rem;
    > p {
      color: ${({ theme }) => theme.gray700};
      font-size: ${({ theme }) => theme.fs12};
    }
  }
`;
