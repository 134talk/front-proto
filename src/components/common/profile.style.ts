import { styled } from 'styled-components';

export const Container = styled.div<{ scale: 'small' | 'medium' | 'large' }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ scale }) =>
    (scale === 'small' && '0.75rem') ||
    (scale === 'medium' && '0.75rem') ||
    (scale === 'large' && '1rem')};
`;
export const NameWrapper = styled.div<{ $isRow: boolean }>`
  display: flex;
  flex-direction: ${({ $isRow }) => ($isRow ? 'row' : 'column')};
  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.25rem;
    > span {
      padding: 0.125rem 0.5rem;
      font-size: ${({ theme }) => theme.fs12};
      font-weight: ${({ theme }) => theme.fw500};
      border-radius: 50px;
      background-color: ${({ theme }) => theme.gray100};
    }
  }
`;
export const NicknameText = styled.p<{ scale: 'small' | 'medium' | 'large' }>`
  margin-right: ${({ scale }) =>
    (scale === 'small' && '0.25rem') ||
    (scale === 'medium' && '0.375rem') ||
    (scale === 'large' && '0')};
  font-size: ${({ scale, theme }) =>
    (scale === 'small' && theme.fs14) ||
    (scale === 'medium' && theme.fs16) ||
    (scale === 'large' && theme.fs18)};
  font-weight: ${({ theme }) => theme.fw500};
`;
export const NameText = styled.p<{ scale: 'small' | 'medium' | 'large' }>`
  margin-top: ${({ scale }) =>
    (scale === 'small' && '0.125rem') ||
    (scale === 'medium' && '0.313rem') ||
    (scale === 'large' && '0.5rem')};
  font-size: ${({ scale, theme }) =>
    (scale === 'small' && theme.fs12) ||
    (scale === 'medium' && theme.fs14) ||
    (scale === 'large' && theme.fs14)};
  font-weight: ${({ theme }) => theme.fw400};
  color: ${({ theme }) => theme.gray700};
`;
