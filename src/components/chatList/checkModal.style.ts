import { styled } from 'styled-components';

export const Container = styled.div`
  .title {
    font-size: ${({ theme }) => theme.fs18};
    font-weight: ${({ theme }) => theme.fw700};
    color: ${({ theme }) => theme.gray900};
    text-align: center;
  }
  .check_text {
    font-size: ${({ theme }) => theme.fs16};
    color: ${({ theme }) => theme.gray700};
    text-align: center;
    margin-top: 0.6rem;
    span {
      font-size: ${({ theme }) => theme.fs16};
      font-weight: ${({ theme }) => theme.fw500};
      color: ${({ theme }) => theme.primary_deep_blue};
    }
  }
  .button_wrapper {
    width: 100%;
    display: flex;
    gap: 0.5rem;
    margin-top: 1.25rem;
  }
`;
