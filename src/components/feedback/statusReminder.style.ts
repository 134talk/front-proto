import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  .content_wrapper {
    display: flex;
    flex-direction: row;
    .text_wrapper {
      width: 11rem;
      display: flex;
      flex-direction: column;
      .main_text {
        font-size: ${({ theme }) => theme.fs18};
        font-weight: ${({ theme }) => theme.fw400};
        line-height: 1.625rem;
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
        line-height: 1.25rem;
      }
      .percent_text {
        font-size: ${({ theme }) => theme.fs56};
        font-weight: ${({ theme }) => theme.fw700};
        line-height: 1.625rem;
        text-align: right;
        position: fixed;
        bottom: 18.75rem;
        left: 10rem;
        > span {
          font-size: ${({ theme }) => theme.fs18};
        }
      }
    }
  }
`;
