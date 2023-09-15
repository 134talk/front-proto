import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  .selection_order_wrapper {
    display: flex;
    flex-direction: row;
    margin: 0.75rem auto;
    gap: 0.5rem;
    cursor: pointer;
    .selection_card_wrapper {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 0.5rem;
      > p {
        position: absolute;
        color: ${({ theme }) => theme.white};
        font-weight: ${({ theme }) => theme.fw700};
        font-size: ${({ theme }) => theme.fs12};
      }
      > span {
        position: absolute;
        width: 1rem;
        background-color: ${({ theme }) => theme.primary_deep_blue};
        color: ${({ theme }) => theme.white};
        font-weight: ${({ theme }) => theme.fw700};
        font-size: ${({ theme }) => theme.fs12};
        border-radius: 15px;
        text-align: center;
        margin-top: -1.871rem;
        margin-right: -3rem;
      }
    }
  }
  .card_wrapper {
    display: flex;
    margin-top: 8.5rem;
    justify-content: center;
  }
  .guide_text_wrapper {
    display: flex;
    flex-direction: column;
    margin-top: 10.5rem;
    gap: 0.5rem;
    > p {
      text-align: center;
    }
    .guide_text {
      font-size: ${({ theme }) => theme.fs20};
      font-weight: ${({ theme }) => theme.fw700};
      > span {
        color: ${({ theme }) => theme.primary_deep_blue};
      }
    }
    .sub_text {
      font-size: ${({ theme }) => theme.fs14};
      font-weight: ${({ theme }) => theme.fw400};
      color: ${({ theme }) => theme.gray600};
    }
  }
`;
