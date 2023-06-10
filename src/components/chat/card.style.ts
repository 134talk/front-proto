import { styled } from 'styled-components';

export const Container = styled.div`
  position: relative;
  perspective: 100rem;
  align-items: center;
  justify-content: center;
  display: flex;
`;
export const CardWrapper = styled.div<{ isFront: boolean }>`
  width: 15rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
  position: absolute;
  cursor: pointer;
  transition: 2s;
  transform-style: preserve-3d;
  transform: ${props => (props.isFront ? 'rotateY(0deg)' : 'rotateY(180deg)')};
`;

export const FrontWrapper = styled.div<{ isFront: boolean }>`
  width: 100%;
  display: flex;
  position: absolute;
  backface-visibility: ${props => (!props.isFront ? 'visible' : 'hidden')};
  visibility: ${props => (props.isFront ? 'hidden' : 'visible')};
  // transform: ${props =>
    props.isFront ? 'rotateY(180deg)' : 'rotateY(0deg)'};
  transform: ${props => props.isFront && 'rotateY(180deg)'};
`;
export const BackWrapper = styled.div<{ isFront: boolean }>`
  width: 100%;
  display: flex;
  position: absolute;
  backface-visibility: ${props => (!props.isFront ? 'hidden' : 'visible')};
  visibility: ${props => (props.isFront ? 'visible' : 'hidden')};
  // transform: ${props =>
    props.isFront ? 'rotateY(180deg)' : 'rotateY(0deg)'};
  transform: ${props => !props.isFront && 'rotateY(-180deg)'};
`;

export const ChatWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 2.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 99;
  position: absolute;
  > div {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    position: fixed;
    bottom: -4.5rem;
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
  .hint_text {
    font-size: 0.675rem;
    line-height: 1.3rem;
    font-weight: 400;
  }
  .question_text {
    font-size: 1.125rem;
    line-height: 1.5rem;
  }
`;
