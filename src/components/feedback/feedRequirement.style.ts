import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 1.25rem;
  display: flex;
  flex-direction: column;
  .title_wrapper {
    display: flex;
    flex-direction: column;
    margin-left: 1.25rem;
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
