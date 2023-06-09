import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 6.5rem;
  margin-top: 5.375rem;
  p {
    font-size: ${({ theme }) => theme.fs32};
    font-weight: ${({ theme }) => theme.fw700};
    line-height: 1.8rem;
    color: ${({ theme }) => theme.primary_deep_blue};
    span {
      font-size: ${({ theme }) => theme.fs24};
      color: ${({ theme }) => theme.gray900};
    }
  }
`;
