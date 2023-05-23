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
    gap: 1.5rem;
    margin: 2.5rem 0;
    position: relative;
    button:nth-child(2) {
      position: absolute;
      bottom: 0;
    }
  }
  .guide_wrapper {
    width: 100%;
    margin-top: 3.5rem;
    > img {
      width: 100%;
      height: 17.5rem;
    }
    > p {
      font-size: 1.125rem;
      text-align: center;
      line-height: 1.3;
      color: #000000;
      margin-top: 1.2rem;
      span {
        font-size: 1rem;
        text-align: center;
        line-height: 1.3;
        color: #667085;
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
    background: #111111;
  }
`;

export const DotsWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 1.2rem;
`;

export const SkipButton = styled.button<StyleProps>`
  width: 5.688rem;
  height: 1.8rem;
  background: none;
  font-size: 0.875rem;
  font-weight: 500;
  color: #667085;
  padding: 0.75rem;
  border-radius: 999px;
  border: solid 1px #d5dae0;
  display: ${({ currentSlide }) => (currentSlide === 6 ? 'none' : 'flex')};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2px;
`;
