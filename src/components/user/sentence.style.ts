import { styled } from 'styled-components';

export const Container = styled.div`
  border-bottom: ${({ theme }) => `1px dashed ${theme.gray200}`};
  p {
    color: ${({ theme }) => theme.gray800};
    font-size: ${({ theme }) => theme.fs16};
    padding: 12px 0;
  }
`;
