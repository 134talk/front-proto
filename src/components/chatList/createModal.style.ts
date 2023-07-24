import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding-top: 0.5rem;
  > section {
    padding: 0 1.25rem;
  }
  .chipWrapper {
    width: 100%;
    > div {
      &:nth-child(n + 2):nth-child(-n + 5) {
        margin-left: 0.3rem;
      }
    }
  }
`;

export const Scroll = styled.div<{ $isMobile: boolean }>`
  width: 100%;
  height: ${({ $isMobile }) => ($isMobile ? '100vh' : '558px')};
  margin-top: 1rem;
  padding-bottom: ${({ $isMobile }) => ($isMobile ? '20rem' : '5rem')};
  display: flex;
  flex-direction: column;
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

export const ProfileWrapper = styled.div<{ $isSelected: boolean }>`
  width: 100%;
  padding: 8px 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background: ${({ $isSelected, theme }) => $isSelected && theme.gray100};
  > img {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
