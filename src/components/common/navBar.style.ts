import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 3.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > img {
    cursor: pointer;
  }
  &.center {
    position: relative;
    justify-content: center;
    > img {
      position: absolute;
      left: 0;
      top: 1.3rem;
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
