import { styled } from 'styled-components';

export const Container = styled.input`
  width: 100%;
  padding: 0.75rem;
  border-radius: 8px;
  border: ${({ theme }) => `solid 1px ${theme.gray300}`};
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #d5dae0;
  }
`;
