import { styled } from 'styled-components';

export const Container = styled.div`
  > section {
    position: relative;
    width: 11.375rem;
    height: 2.609rem;
    margin: 6.688rem auto 0 auto;
    background: #ffffff;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 2rem;
    border: #98a2b3 solid 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    & :after {
      content: '';
      position: absolute;
      border-style: solid;
      border-width: 10px 8px 0;
      border-color: #ffffff transparent;
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
      border-color: #98a2b3 transparent;
      display: block;
      width: 0;
      z-index: 0;
      bottom: -10px;
      left: 5rem;
    }
    p {
      font-size: 0.75rem;
      color: #4059de;
    }
    img {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`;
