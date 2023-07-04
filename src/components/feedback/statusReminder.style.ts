import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  .content_wrapper {
    display: flex;
    flex-direction: row;
    .text_wrapper {
      width: 12rem;
      display: flex;
      flex-direction: column;
      padding-left: 0.75rem;
      margin-right: 0.75rem;
      .main_text {
        font-size: ${({ theme }) => theme.fs18};
        font-weight: ${({ theme }) => theme.fw400};
        margin-top: 4rem;
        margin-bottom: 0.5rem;
        > span {
          color: ${({ theme }) => theme.error_red};
        }
      }
      .sub_text {
        font-size: ${({ theme }) => theme.fs14};
        font-weight: ${({ theme }) => theme.fw400};
        color: ${({ theme }) => theme.gray600};
      }
      .percent_text {
        font-size: ${({ theme }) => theme.fs56};
        font-weight: ${({ theme }) => theme.fw700};
        text-align: right;
        position: fixed;
        bottom: 18.75rem;
        left: 8rem;
        > span {
          font-size: ${({ theme }) => theme.fs18};
        }
      }
    }
  }
`;
