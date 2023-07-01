import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const TabWrapper = styled.div<{ $isMobile: boolean }>`
  position: absolute;
  top: ${({ $isMobile }) => ($isMobile ? '190px' : '230px')};
  left: 0;
  width: 100%;
  z-index: 99;
  background: ${({ theme }) => theme.white};
`;

export const Tab = styled.button<{ $isSelected: boolean }>`
  width: 50%;
  height: 49px;
  background: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.fs16};
  font-weight: ${({ theme }) => theme.fw600};
  color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.gray900 : theme.gray500};
  border-bottom: ${({ $isSelected, theme }) =>
    $isSelected
      ? `2px solid ${theme.primary_deep_blue}`
      : `1px solid ${theme.gray300}`};
`;

export const Scroll = styled.div<{ $isMobile: boolean }>`
  width: 100%;
  height: ${({ $isMobile }) => ($isMobile ? 'calc(100vh - 9rem)' : '620px')};
  background: ${({ theme }) => theme.gray100};
  padding: 3rem 1.25rem 2rem 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
