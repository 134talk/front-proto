import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 1.25rem;
  background: ${({ theme }) => theme.gray100};
  .wrapper {
    width: 100%;
    padding-top: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
`;
