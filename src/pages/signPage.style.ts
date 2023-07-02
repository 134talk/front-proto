import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0 1.25rem;
  > section {
    position: relative;
    width: 11.375rem;
    height: 2.609rem;
    margin: 6.688rem auto 0 auto;
    background: ${({ theme }) => theme.white};
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 2rem;
    border: ${({ theme }) => `${theme.gray500} solid 1px`};
    display: flex;
    justify-content: center;
    align-items: center;
    & :after {
      content: '';
      position: absolute;
      border-style: solid;
      border-width: 10px 8px 0;
      border-color: ${({ theme }) => `${theme.white} transparent`};
      display: block;
      width: 0;
      z-index: 1;
      bottom: -9px;
      left: 5rem;
    }
    &:before {
      content: '';
      position: absolute;
      border-style: solid;
      border-width: 10px 8px 0;
      border-color: ${({ theme }) =>
        `${theme.gray500} transparent`};transparent;
      display: block;
      width: 0;
      z-index: 0;
      bottom: -10px;
      left: 5rem;
    }
    p {
      font-size: ${({ theme }) => theme.fs12};
      color: ${({ theme }) => theme.primary_deep_blue};
    }
    img {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`;
