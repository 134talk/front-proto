import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > .wrapper {
    width: 80%;
    height: 2.75rem;
    display: flex;
    flex-direction: column;
    & .textWrapper {
      display: flex;
      justify-content: space-between;
      margin-top: -8px;
      > p {
        font-size: ${({ theme }) => theme.fs14};
        color: ${({ theme }) => theme.gray700};
        &:nth-child(2) {
          font-size: ${({ theme }) => theme.fs16};
          font-weight: ${({ theme }) => theme.fw600};
          color: ${({ theme }) => theme.gray900};
        }
      }
    }
  }
`;

export const Bar = styled.div`
  width: 100%;
  height: 0.4rem;
  border-radius: 3px;
  background-color: #e9ecef;
  margin-top: -10px;
`;

export const Percent = styled.div<{ color: string; value: number }>`
  width: ${({ value }) => `${value}%`};
  height: 0.4rem;
  border-radius: 3px;
  background: ${({ color }) => color};
`;
