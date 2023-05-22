import { styled } from 'styled-components';

export const Container = styled.div`
  > section {
    width: 100%;
    height: calc(100% - 13.3rem);
    margin-top: 0.5rem;
    padding-bottom: 4rem;
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    > div {
      &:first-child {
        padding-top: 0.5rem;
      }
    }
  }
`;
