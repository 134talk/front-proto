import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  // height: 100%;
  // height: calc(100% - 17rem);
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
    }
    .sub_text {
      font-size: ${({ theme }) => theme.fs14};
      font-weight: ${({ theme }) => theme.fw400};
      color: ${({ theme }) => theme.gray600};
    }
  }
`;
export const RemindWrapper = styled.div<{ $height: number }>`
  width: 100%;
  height: ${({ $height }) => $height * 200 + 'px'};
  display: flex;
  flex-direction: column;
  padding: 0 1.875rem;
  overflow: scroll;
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
    text-align: center;
    margin: 1.5rem 0;
  }
  .select_wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 0.5rem;
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
    margin: 0.5rem 0;
    border: 1px solid ${({ theme }) => theme.gray300};
    resize: none;
    &::placeholder {
      color: ${({ theme }) => theme.gray300};
      font-size: ${({ theme }) => theme.fs14};
    }
  }
`;
export const SelectText = styled.label<{ $isChecked: boolean }>`
  font-size: ${({ theme }) => theme.fs16};
  font-weight: ${({ theme }) => theme.fw400};
  color: ${({ $isChecked, theme }) =>
    $isChecked ? theme.gray900 : theme.gray600};
`;
