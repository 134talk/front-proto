import { styled } from 'styled-components';

type Props = {
  isSelected: boolean;
};

export const Container = styled.div`
  width: 100%;
  .tabWrapper {
    position: absolute;
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
  height: 3rem;
  background: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ isSelected }) => (isSelected ? '#111111' : '#98a2b3')};
  border-bottom: ${({ isSelected }) =>
    isSelected ? '2px solid #4059de' : '1px solid #d5dae0'};
`;
