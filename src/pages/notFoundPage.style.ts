import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  margin-top: 10rem;
  font-size: ${({ theme }) => theme.fs18};
  color: ${({ theme }) => theme.gray900};
  > img {
    width: 6.25rem;
    height: 6.25rem;
  }
`;
