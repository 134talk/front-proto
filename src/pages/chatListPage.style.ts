import { styled } from 'styled-components';

export const Container = styled.div`
  > section {
    width: calc(100% - 1.25rem * 2);
    height: calc(100% - 13.3rem);
    margin-top: 1rem;
    padding-bottom: 6rem;
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
