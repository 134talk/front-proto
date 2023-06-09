import { styled } from 'styled-components';

export const Container = styled.div`
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
    &:first-child {
      padding-top: 0.5rem;
    }
    > img {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
  > section {
    width: 100%;
    height: calc(100% - 13.3rem);
    margin-top: 0.5rem;
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
    > p {
      font-size: ${({ theme }) => theme.fs14};
      color: ${({ theme }) => theme.gray700};
      text-align: center;
      margin: 15rem auto;
    }
  }
`;
