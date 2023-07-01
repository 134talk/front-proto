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
    > img {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

export const Scroll = styled.div<{ $isMobile: boolean }>`
  width: 100%;
  height: ${({ $isMobile }) => ($isMobile ? 'calc(100vh - 11.5rem)' : '558px')};
  margin-top: 1rem;
  padding-bottom: 6rem;
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
`;
