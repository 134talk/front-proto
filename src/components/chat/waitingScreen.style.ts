import { styled } from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  .user_wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 7rem;
    gap: 1rem;
  }
  .list_wrapper {
    width: 14rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 1rem;
    row-gap: 0.5rem;
  }
  .tooltip {
    background-color: white;
    color: #000;
    border-radius: 20px;
    border: 1px solid #f4f6f9;
    box-shadow: 3px 4px 6px 0 rgba(138, 138, 138, 0.2);
    width: 6rem;
    height: 2.8rem;
    padding: 0.5rem;
    text-align: center;
    font-size: 0.75rem;
    opacity: 1;
    z-index: 99;
  }
  .text_wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 0.875rem;
    gap: 0.375rem;
  }
  .button_wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0.75rem 0;
  }
  p {
    line-height: 1.95rem;
    font-weight: bold;
    &:nth-child(1) {
      font-size: 1.25rem;
      color: #f58548;
    }
    &:nth-child(2) {
      font-size: 1.5rem;
    }
  }
  > img {
    width: 14rem;
  }
`;
