import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.3rem;
  margin: 7.8rem 0 9.5rem 0;
  p {
    font-size: ${({ theme }) => theme.fs20};
    text-align: center;
    font-weight: ${({ theme }) => theme.fw500};
    color: ${({ theme }) => theme.gray900};
    line-height: 1.3;
    span {
      font-size: ${({ theme }) => theme.fs24};
      font-weight: ${({ theme }) => theme.fw700};
      color: ${({ theme }) => theme.primary_deep_blue};
    }
  }
`;
