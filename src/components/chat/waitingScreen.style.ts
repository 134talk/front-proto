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
    color: ${({ theme }) => theme.gray900};
    border-radius: 20px;
    border: 1px solid ${({ theme }) => theme.gray100};
    box-shadow: 3px 4px 6px 0 ${({ theme }) => theme.box_shadow};
    width: 6rem;
    height: 2.8rem;
    padding: 0.5rem;
    text-align: center;
    font-size: ${({ theme }) => theme.fs12};
    opacity: 1;
    z-index: 99;
  }
  .text_wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 0.875rem;
    gap: 0.375rem;
  }
  p {
    font-weight: ${({ theme }) => theme.fw700};
    font-size: ${({ theme }) => theme.fs24};
    &:nth-child(1) {
      color: ${({ theme }) => theme.primary_deep_blue};
    }
  }
  > img {
    width: 14rem;
  }
`;
