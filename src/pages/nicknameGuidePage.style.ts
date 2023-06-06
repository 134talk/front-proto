import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 6rem 0 5.875rem 0;
  .username {
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
    color: #4059de;
    line-height: 1.3;
  }
  > p {
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
    color: #ffffff;
  }
  section {
    margin: 3rem 0 1rem 0;
    position: relative;
    width: 14.25rem;
    height: 12.188rem;
    padding: 0px;
    background: #ffffff;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:after {
      content: '';
      position: absolute;
      border-style: solid;
      border-width: 9px 8px 0;
      border-color: #ffffff transparent;
      display: block;
      width: 0;
      z-index: 1;
      bottom: -9px;
      left: 105px;
    }
    > p {
      font-size: 1rem;
      font-weight: 400;
      text-align: center;
      line-height: 1.3;
      color: #475467;
      span {
        color: #4059de;
      }
    }
  }
  > img {
    margin-top: 1.3rem;
  }
  .bold_white {
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
    line-height: 1.3;
    color: #475467;
    font-weight: 600;
    color: #ffffff;
  }
  > button {
    margin-top: 2rem;
  }
`;
