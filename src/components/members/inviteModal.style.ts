import { styled } from 'styled-components';

export const Container = styled.div`
  p {
    font-size: ${({ theme }) => theme.fs18};
    font-weight: ${({ theme }) => theme.fw700};
    margin-top: 0.8rem;
  }
  .buttonWrapper {
    width: 100%;
    height: 2.75rem;
    display: flex;
    gap: 0.5rem;
    margin-top: 2.6rem;
  }
`;
