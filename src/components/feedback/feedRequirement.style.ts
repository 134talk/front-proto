import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0 1.25rem;
  display: flex;
  flex-direction: column;
  .title_wrapper {
    display: flex;
    flex-direction: column;
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
