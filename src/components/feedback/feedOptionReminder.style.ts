import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: calc(100% - 17rem);
  .title_wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-bottom: 1.25rem;
    border-bottom: 10px solid ${({ theme }) => theme.gray100};
    .title_text {
      font-size: ${({ theme }) => theme.fs20};
      font-weight: ${({ theme }) => theme.fw700};
      line-height: 1.625rem;
    }
    .sub_text {
      font-size: ${({ theme }) => theme.fs14};
      font-weight: ${({ theme }) => theme.fw400};
      color: ${({ theme }) => theme.gray600};
      line-height: 1.625rem;
    }
  }
`;
export const RemindWrapper = styled.div`
  width: 100%;
  height: 27.5rem;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0.625rem;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  .feedback_wrapper {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  }
  .question_text {
    font-size: ${({ theme }) => theme.fs18};
    font-weight: ${({ theme }) => theme.fw700};
    line-height: 1.625rem;
    text-align: center;
    margin-bottom: 1rem;
  }
  .select_wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    .select_input {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      border: 1px solid ${({ theme }) => theme.gray300};
      margin-right: 0.5rem;
    }
    .select_input:checked {
      accent-color: ${({ theme }) => theme.primary_deep_blue};
    }
  }
  .select_textarea {
    width: 100%;
    height: 8rem;
    border-radius: 0.5rem;
    padding: 0.75rem 1rem;
    margin: 1rem 0;
    border: 1px solid ${({ theme }) => theme.gray300};
    resize: none;
    &::placeholder {
      color: ${({ theme }) => theme.gray300};
      font-size: ${({ theme }) => theme.fs14};
      line-height: 1.25rem;
    }
  }
`;

export const SelectText = styled.label<{ $isChecked: boolean }>`
  font-size: ${({ theme }) => theme.fs16};
  font-weight: ${({ theme }) => theme.fw400};
  color: ${props =>
    props.$isChecked
      ? ({ theme }) => theme.gray900
      : ({ theme }) => theme.gray600};
  line-height: 2rem;
`;
