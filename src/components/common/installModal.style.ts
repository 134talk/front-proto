import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -1.3rem;
  color: ${({ theme }) => theme.gray800};
  .title_text {
    font-size: ${({ theme }) => theme.fs18};
    font-weight: ${({ theme }) => theme.fw500};
    margin-bottom: 1.5rem;
  }
  .sub_text {
    line-height: 2rem;
    margin-bottom: 1rem;
    &:nth-child(3) {
      display: flex;
      align-items: center;
      margin-top: -1rem;
    }
    > span {
      color: ${({ theme }) => theme.gray700};
      font-weight: ${({ theme }) => theme.fw600};
      margin-right: 0.25rem;
    }
    > img {
      margin-right: 0.25rem;
    }
  }
`;
