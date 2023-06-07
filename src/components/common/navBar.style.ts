import { styled } from 'styled-components';

export const Container = styled.div`
  width: calc(100% + 1.25rem * 2);
  height: 3.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  margin: 0 1.25rem 0 -1.25rem;
  padding: 0 1.25rem;
  > img {
    cursor: pointer;
  }
  &.center {
    position: relative;
    justify-content: center;
    > img {
      position: absolute;
      left: 1.25rem;
      top: 1rem;
      cursor: pointer;
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
    font-size: 1.25rem;
    font-weight: 700;
    color: #000000;
    span {
      font-weight: 400;
    }
  }
`;
