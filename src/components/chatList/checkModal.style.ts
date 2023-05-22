import { styled } from 'styled-components';

export const Container = styled.div`
  .title {
    font-size: 1.125rem;
    font-weight: 700;
    color: #000000;
    text-align: center;
  }
  .check_text {
    font-size: 1rem;
    color: #475467;
    text-align: center;
    line-height: 1.3;
    margin-top: 0.6rem;
    span {
      font-size: 1rem;
      font-weight: 500;
      color: #f58548;
    }
  }
  .button_wrapper {
    width: 100%;
    display: flex;
    gap: 0.5rem;
    margin-top: 1.25rem;
  }
`;
