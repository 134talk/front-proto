import { styled } from 'styled-components';

export const Container = styled.div`
  > p {
    font-size: 1rem;
    font-weight: 500;
    color: #000000;
    line-height: 1.3;
  }
  .small_text {
    font-size: 0.875rem;
    color: #475467;
    line-height: 1.3;
    margin-top: 0.5rem;
  }
  .setting_text {
    font-size: 1rem;
    line-height: 1.3;
    text-align: center;
    margin: 1.2rem;
    > input {
      max-width: 4rem;
      border-radius: 8px;
      border: 1px solid #d5dae0;
      padding: 0.75rem;
      margin: 0.25rem;
      text-align: right;
      color: #f58548;
      &:focus {
        outline: none;
      }
    }
  }
  .button_wrapper {
    width: 100%;
    display: flex;
    gap: 0.5rem;
    padding-bottom: 2.875rem;
  }
`;
