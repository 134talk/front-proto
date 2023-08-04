import React from 'react';
import { styled } from 'styled-components';

interface Props {
  placeholder: string;
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input(props: Props) {
  return <Container {...props} />;
}

const Container = styled.input`
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
