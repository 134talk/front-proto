import { styled } from 'styled-components';

export const Container = styled.h1`
  width: 100%;
  font-size: ${({ theme }) => theme.fs18};
  font-weight: ${({ theme }) => theme.fw600};
  color: ${({ theme }) => theme.gray900};
  margin-top: 1.45rem;
`;
