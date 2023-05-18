import { styled } from 'styled-components';

export const Container = styled.input`
  width: 100%;
  padding: 0.75rem;
  border-radius: 8px;
  border: solid 1px #aab5c1;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #aab5c1;
  }
`;
