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
    color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
  }
  input {
    display: none;
    &:checked + label {
      border: solid 1px #f58548;
      background-color: #fff2d7;
      font-size: 1.125rem;
      font-weight: 700;
      color: #f58548;
    }
  }
`;
