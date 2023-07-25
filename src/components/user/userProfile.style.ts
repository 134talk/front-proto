import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  left: 0;
  padding-top: 0.75rem;
  position: absolute;
  background: ${({ theme }) => theme.white};
  z-index: 999;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
  section {
    width: 100%;
    &.profile {
      padding: 0 20px;
    }
  }
  .buttonWrapper {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    > button {
      height: 1rem;
      background: none;
      color: ${({ theme }) => theme.gray500};
      font-size: ${({ theme }) => theme.fs14};
      display: flex;
      align-items: center;
      gap: 0.25rem;
      img {
        width: 1rem;
        height: 1rem;
      }
    }
  }
`;

export const Tab = styled.button<{ $isSelected: boolean }>`
  width: 50%;
  height: 49px;
  background: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.fs16};
  font-weight: ${({ theme }) => theme.fw600};
  color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.gray900 : theme.gray500};
  padding-bottom: ${({ $isSelected }) => !$isSelected && '2px'};
  border-bottom: ${({ $isSelected, theme }) =>
    $isSelected
      ? `2px solid ${theme.primary_deep_blue}`
      : `1px solid ${theme.gray300}`};
`;
