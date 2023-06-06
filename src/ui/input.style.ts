import { styled } from 'styled-components';

export const Container = styled.input`
  width: 100%;
  padding: 0.75rem;
  border-radius: 8px;
  border: solid 1px #d5dae0;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #d5dae0;
  }
`;
