import { styled } from 'styled-components';

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  background: #ffffff;
  z-index: 99;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Container = styled.div`
  width: calc(100% - 1.25rem * 2);
  height: 100%;
  margin-top: 2.75rem;
  position: absolute;
  top: 0;
  z-index: 100;
  .chipWrapper {
    width: 100%;
    > div {
      &:nth-child(n + 2):nth-child(-n + 4) {
        margin-left: 0.5rem;
      }
    }
  }
  .profileWrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    > img {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
  section {
    width: 100%;
    height: calc(100% - 16.125rem);
    margin-top: 2rem;
    padding-bottom: 8rem;
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 1.125rem;
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
