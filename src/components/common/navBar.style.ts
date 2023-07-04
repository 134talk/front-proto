import { styled } from 'styled-components';

export const Container = styled.div<{ $isBottom: boolean; $isMargin: boolean }>`
  width: 100%;
  height: 56px;
  padding: ${({ $isBottom }) => ($isBottom ? '0' : '0 1.25rem')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme, $isBottom }) => ($isBottom ? 'none' : theme.white)};
  position: relative;
  .back {
    position: absolute;
    left: 0.75rem;
    width: 1.5rem;
    height: 1.5rem;
    > img {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
  .close {
    position: absolute;
    right: 0.75rem;
    width: 1.5rem;
    height: 1.5rem;
  }
  &.center {
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    > div {
      position: absolute;
      right: 1.25rem;
      top: 1rem;
      cursor: pointer;
      display: flex;
      flex-direction: column;
    }
    .badge_image {
      position: absolute;
      width: 0.875rem;
      right: -0.25rem;
    }
  }
  .wrapper {
    display: flex;
    gap: 0.625rem;
    > img {
      cursor: pointer;
    }
  }
  section {
    width: 6rem;
    height: 1.875rem;
  }
  p {
    font-size: ${({ theme }) => theme.fs20};
    font-weight: ${({ theme }) => theme.fw700};
    color: ${({ theme }) => theme.gray900};
    span {
      font-weight: ${({ theme }) => theme.fw400};
    }
  }
`;
