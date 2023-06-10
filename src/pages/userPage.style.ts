import { styled } from 'styled-components';

type Props = {
  isSelected: boolean;
};

export const Container = styled.div`
  width: 100%;
  .tabWrapper {
    position: absolute;
    top: 190px;
    left: 0;
    width: 100%;
    z-index: 99;
  }
  > .contentWrapper {
    width: calc(100% - 1.25rem * 2);
    height: calc(100% - 10rem);
    min-height: 31rem;
    position: absolute;
    overflow: auto;
    padding-bottom: 5rem;
    margin-top: 3rem;
    -ms-overflow-style: none;
    scrollbar-width: none;
    padding-bottom: 10rem;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const Tab = styled.button<Props>`
  width: 50%;
  height: 49px;
  background: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.fs16};
  font-weight: ${({ theme }) => theme.fw600};
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.gray900 : theme.gray500};
  border-bottom: ${({ isSelected, theme }) =>
    isSelected
      ? `2px solid ${theme.primary_deep_blue}`
      : `1px solid ${theme.gray300}`};
`;
