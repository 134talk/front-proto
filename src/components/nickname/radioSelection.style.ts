import { styled } from 'styled-components';

export const Container = styled.div`
  label {
    width: 100%;
    height: 3.5rem;
    border-radius: 8px;
    border: ${({ theme }) => `solid 1px ${theme.gray300}`};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 0.75rem;
    padding: 1.25rem 1.5rem;
    font-size: ${({ theme }) => theme.fs16};
    color: ${({ theme }) => theme.gray600};
    cursor: pointer;
  }
  input {
    display: none;
    &:checked + label {
      border: ${({ theme }) => `solid 1px ${theme.primary_deep_blue}`};
      background-color: ${({ theme }) => theme.gray100};
      font-size: ${({ theme }) => theme.fs18};
      font-weight: ${({ theme }) => theme.fw700};
      color: ${({ theme }) => theme.primary_deep_blue};
    }
  }
`;
