import { styled } from 'styled-components';

export const Container = styled.div`
  border-bottom: ${({ theme }) => `1px dashed ${theme.gray200}`};
  .emotionWrapper {
    display: flex;
    gap: 0.5rem;
    margin-top: 0.75rem;
    padding-bottom: 0.75rem;
  }
`;
