import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 5rem 1.25rem 0 1.25rem;
  .username {
    font-size: ${({ theme }) => theme.fs16};
    font-weight: ${({ theme }) => theme.fw500};
    text-align: center;
    color: ${({ theme }) => theme.primary_deep_blue};
    line-height: 1.3;
  }
  > p {
    font-size: ${({ theme }) => theme.fs24};
    font-weight: ${({ theme }) => theme.fw600};
    text-align: center;
    color: ${({ theme }) => theme.white};
  }
  section {
    margin: 3rem 0 1rem 0;
    position: relative;
    width: 14.25rem;
    height: 12.188rem;
    padding: 0px;
    background: ${({ theme }) => theme.white};
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
      border-color: ${({ theme }) => `${theme.white} transparent`};
      display: block;
      width: 0;
      z-index: 1;
      bottom: -9px;
      left: 105px;
    }
    > p {
      font-size: ${({ theme }) => theme.fs16};
      font-weight: ${({ theme }) => theme.fw400};
      text-align: center;
      line-height: 1.3;
      color: ${({ theme }) => theme.gray700};
      span {
        color: ${({ theme }) => theme.primary_deep_blue};
      }
    }
  }
  > img {
    margin-top: 1.3rem;
  }
  .bold_white {
    font-size: ${({ theme }) => theme.fs16};
    font-weight: ${({ theme }) => theme.fw600};
    color: ${({ theme }) => theme.white};
    text-align: center;
    line-height: 1.3;
  }
  > button {
    margin-top: 2rem;
  }
`;
