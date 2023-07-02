import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  > p {
    font-size: ${({ theme }) => theme.fs16};
    font-weight: ${({ theme }) => theme.fw500};
    color: ${({ theme }) => theme.gray900};
    line-height: 1.3;
  }
  .small_text {
    font-size: ${({ theme }) => theme.fs14};
    color: ${({ theme }) => theme.gray700};
    line-height: 1.3;
    margin-top: 0.5rem;
  }
  .setting_text {
    font-size: ${({ theme }) => theme.fs16};
    line-height: 1.3;
    text-align: center;
    margin: 1.2rem;
    > input {
      max-width: 4rem;
      border-radius: 8px;
      border: ${({ theme }) => `1px solid ${theme.gray300}`};
      padding: 0.75rem;
      margin: 0.25rem;
      text-align: right;
      color: ${({ theme }) => theme.primary_deep_blue};
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
