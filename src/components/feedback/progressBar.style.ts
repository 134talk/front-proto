import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 1.25rem 0;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  > div {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;
export const ProgressText = styled.span<{ $status: boolean }>`
  color: ${props =>
    props.$status ? ({ theme }) => theme.white : ({ theme }) => theme.gray500};
  font-size: ${({ theme }) => theme.fs12};
  font-weight: ${({ theme }) => theme.fw700};
  background-color: ${props =>
    props.$status
      ? ({ theme }) => theme.primary_deep_blue
      : ({ theme }) => theme.gray200};
  text-align: center;
  width: 1.25rem;
  height: 1.25rem;
  padding: 0.125rem 0;
  border-radius: 50%;
`;
export const ProgressLine = styled.div<{ $status: boolean }>`
  width: 2.75rem;
  height: 0.25rem;
  background-color: ${props =>
    props.$status
      ? ({ theme }) => theme.primary_deep_blue
      : ({ theme }) => theme.gray200};
`;
