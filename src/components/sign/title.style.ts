import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin: 2.5rem 0 2.125rem 0;
  img {
    width: 4.875rem;
    height: 4.25rem;
  }
  span {
    font-size: ${({ theme }) => theme.fs24};
    font-weight: ${({ theme }) => theme.fw700};
    color: ${({ theme }) => theme.gray900};
  }
`;
