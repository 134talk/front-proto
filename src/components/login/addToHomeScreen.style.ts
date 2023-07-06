import { styled } from 'styled-components';

export const Container = styled.div`
  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 2.5rem;
    :nth-child(2) {
      color: ${({ theme }) => theme.white};
      font-size: ${({ theme }) => theme.fs14};
      font-weight: ${({ theme }) => theme.fw500};
      margin: 2rem 0;
    }
  }
`;
