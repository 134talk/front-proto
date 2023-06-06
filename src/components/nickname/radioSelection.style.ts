import { styled } from 'styled-components';

export const Container = styled.div`
  label {
    width: 100%;
    height: 3.5rem;
    border-radius: 8px;
    border: solid 1px #d5dae0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 0.75rem;
    padding: 1.25rem 1.5rem;
    font-size: 1rem;
    color: #667085;
    cursor: pointer;
  }
  input {
    display: none;
    &:checked + label {
      border: solid 1px #4059de;
      background-color: #f4f6f9;
      font-size: 1.125rem;
      font-weight: 700;
      color: #4059de;
    }
  }
`;
