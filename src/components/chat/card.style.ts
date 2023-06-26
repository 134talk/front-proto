import { css, keyframes, styled } from 'styled-components';

export const Container = styled.div`
  perspective: 50rem;
  width: 15rem;
`;
export const CardWrapper = styled.div<{ isFront: boolean; size: string }>`
  align-items: center;
  display: flex;
  position: relative;
  cursor: pointer;
  transform-style: preserve-3d;
  width: ${props => (props.size ? props.size : '6.25rem')};
  transform: ${props => (!props.isFront ? 'rotateY(0deg)' : 'rotateY(180deg)')};
  animation: ${props =>
    !props.isFront
      ? css`
          ${CardFlipAnimationReverse} 2s ease
        `
      : css`
          ${CardFlipAnimation} 2s ease
        `};
`;
export const CardFlipAnimation = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(180deg);
  }
`;
export const CardFlipAnimationReverse = keyframes`
  from {
    transform: rotateY(-180deg);
  }
  to {
    transform: rotateY(0deg);
  }
`;
export const CardSideWrapper = styled.div`
  &.card {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    backface-visibility: hidden;
  }
  &.card_front {
    z-index: 1;
    transform: rotateY(0deg);
  }
  &.card_back {
    transform: rotateY(180deg);
  }
`;
export const ChatWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 2.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  > div {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    position: fixed;
    bottom: 3.25rem;
    > button {
      font-size: 0.675rem;
      color: #fff;
      padding: 0;
      margin: 0;
      background-color: transparent;
    }
  }
  > p {
    color: #fff;
    text-align: center;
  }
  .keyword_text {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
  }
  .depth_text {
    font-size: 0.875rem;
    line-height: 1.3rem;
    font-weight: 400;
  }
  .question_text {
    font-size: 1.125rem;
    line-height: 1.5rem;
  }
`;
