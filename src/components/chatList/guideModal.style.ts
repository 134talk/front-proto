import { styled } from 'styled-components';

type StyleProps = {
  currentSlide: number;
};

export const Container = styled.div`
  > section {
    width: 100%;
    height: 6.675rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    position: relative;
    button:nth-child(2) {
      position: absolute;
      bottom: 1rem;
    }
  }
  .guide_wrapper {
    width: 100%;
    margin-top: 2rem;
    > img {
      width: 100%;
      height: 17.5rem;
    }
    > p {
      font-size: ${({ theme }) => theme.fs16};
      text-align: center;
      line-height: 1.3;
      color: ${({ theme }) => theme.gray900};
      margin-top: 1.2rem;
      span {
        font-size: ${({ theme }) => theme.fs12};
        text-align: center;
        line-height: 1.3;
        color: ${({ theme }) => theme.gray600};
        &.blue {
          font-size: ${({ theme }) => theme.fs16};
          color: ${({ theme }) => theme.primary_deep_blue};
        }
      }
    }
  }
  .dotsCustom {
    display: flex;
    justify-content: center;
  }
  .dotsCustom li {
    list-style: none;
    display: inline-block;
    margin: 0 4px;
  }
  .dotsCustom li button {
    color: transparent;
    display: block;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 100%;
    padding: 0;
    cursor: pointer;
  }
  .dotsCustom li.slick-active button {
    background: ${({ theme }) => theme.gray900};
  }
`;

export const DotsWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 0.5rem;
`;

export const SkipButton = styled.button<StyleProps>`
  width: 5.688rem;
  height: 1.8rem;
  background: none;
  font-size: ${({ theme }) => theme.fs14};
  font-weight: ${({ theme }) => theme.fw500};
  color: ${({ theme }) => theme.gray600};
  padding: 0.75rem;
  border-radius: 999px;
  border: ${({ theme }) => `solid 1px ${theme.gray300}`};
  display: ${({ currentSlide }) => (currentSlide === 6 ? 'none' : 'flex')};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2px;
`;
