import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 2.75rem;
  display: flex;
  flex-direction: column;
  > .textWrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
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
`;

export const Bar = styled.div`
  width: 100%;
  height: 0.4rem;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.gray200};
  margin-top: 0.5rem;
`;

export const Percent = styled.div<{
  color: string;
  value: number;
  $isMemberReport: boolean;
}>`
  width: ${({ value, $isMemberReport }) =>
    $isMemberReport ? `${(value / 10) * 100}%` : `${value}%`};
  height: 0.4rem;
  background: ${({ color, theme }) =>
    color ? color : theme.primary_deep_blue};
  border-radius: 3px;
`;
