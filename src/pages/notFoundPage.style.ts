import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  margin-top: 10rem;
  font-size: ${({ theme }) => theme.fs16};
  color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.gray700};
  padding: 0 1.25rem;
  > img {
    width: 6.25rem;
    height: 6.25rem;
  }
`;
