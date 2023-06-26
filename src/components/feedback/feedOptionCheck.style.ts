import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  .title_wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .title_text {
      font-size: ${({ theme }) => theme.fs20};
      font-weight: ${({ theme }) => theme.fw700};
      line-height: 1.625rem;
    }
    .sub_text {
      font-size: ${({ theme }) => theme.fs16};
      font-weight: ${({ theme }) => theme.fw400};
      line-height: 1.625rem;
      > span {
        color: ${({ theme }) => theme.error_red};
      }
    }
  }
  .check_wrapper {
    padding: 1.5rem 0;
    border-bottom: 10px solid ${({ theme }) => theme.gray100};
    .range_wrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 0 auto;
      width: 80%;
      > p {
        color: ${({ theme }) => theme.gray400};
        font-size: ${({ theme }) => theme.fs16};
        font-weight: ${({ theme }) => theme.fw400};
        line-height: 1.625rem;
      }
    }
    .score_wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      > p {
        color: ${({ theme }) => theme.primary_deep_blue};
        &:nth-child(1) {
          font-size: ${({ theme }) => theme.fs14};
          font-weight: ${({ theme }) => theme.fw400};
        }
        &:nth-child(2) {
          font-size: ${({ theme }) => theme.fs32};
          font-weight: ${({ theme }) => theme.fw700};
          line-height: 130%;
        }
      }
    }
  }
  .sentence_text {
    font-size: ${({ theme }) => theme.fs18};
    font-weight: ${({ theme }) => theme.fw700};
    line-height: 1.5rem;
    text-align: center;
    margin: 1.5rem 0 1rem 0;
  }
  > textarea {
    width: 100%;
    height: 10rem;
    border-radius: 0.5rem;
    padding: 0.75rem 1rem;
    border: 1px solid ${({ theme }) => theme.gray300};
    resize: none;
    &::placeholder {
      color: ${({ theme }) => theme.gray300};
      font-size: ${({ theme }) => theme.fs14};
      line-height: 1.25rem;
    }
  }
`;