import { styled } from 'styled-components';

type Props = {
  isBottom: boolean;
};

export const Container = styled.div<Props>`
  width: calc(100% + 1.25rem * 2);
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme, isBottom }) => (isBottom ? 'none' : theme.white)};
  margin: 0 1.25rem 0 -1.25rem;
  padding: 0 1.25rem;
  > img {
    cursor: pointer;
  }
  &.center {
    .block {
      width: 24px;
      height: 24px;
      background: none;
    }
    > div {
      position: absolute;
      right: 0;
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
