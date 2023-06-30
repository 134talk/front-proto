import { keyframes, styled } from 'styled-components';

// const float1 = keyframes`
//   from {
//     left: 30px;
//     bottom: 150px;
//     z-index: 99;
//     width: 5%;
//     opacity: 1;
//     transform: scale(0.5) translate(0, 0);
//   }
//   to {
//     left: 30px;
//     bottom: 150px;
//     z-index: 99;
//     width: 5%;
//     opacity: 0;
//     transform: scale(1) translate(0, -500px);
//   }
// `;
// const float2 = keyframes`
//   from {
//     left: 70px;
//     bottom: 120px;
//     z-index: 99;
//     width: 5%;
//     opacity: 0.5;
//     transform: scale(0.5) translate(0, 0);
//   }
//   to {
//     left: 70px;
//     bottom: 120px;
//     z-index: 99;
//     width: 10%;
//     opacity: 0;
//     transform: scale(1) translate(0, -700px);
//   }
// `;

export const Container = styled.div`
  background-color: #e9ecef;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const EmotionImage = styled.div<{ size: string }>`
  width: ${props => (props.size ? props.size : '3rem')};
  height: ${props => (props.size ? props.size : '3rem')};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  > img {
    position: absolute;
  }
`;
const floatAnim = keyframes`
  from {
    z-index: 99;
    opacity: 1;
    transform: scale(0.5) translate(0, 0);
  }
  to {
    z-index: 99;
    opacity: 0;
    transform: scale(1) translate(0, -500px);
  }
`;
export const FloatImage = styled.img`
  position: absolute;
  justify-content: center;
  align-items: center;
  display: flex;
  left: ${() => Math.random() * 100}%;
  bottom: ${() => Math.random() * 100}px;
  width: ${() => 5 + Math.random() * 10}%;
  animation: ${floatAnim} 1s ease-out;
  animation-duration: ${() => 5 + Math.random() * 5}s;
  animation-iteration-count: ${() => Math.floor(3 + Math.random() * 5)};
  animation-delay: ${() => Math.random() * 7}s;
  // &:nth-child(2) {
  //   animation: {float1} 1s ease-out;
  //   animation-duration: 5s;
  //   animation-iteration-count: 5;
  //   animation-delay: 1s;
  // }
  // &:nth-child(3) {
  //   animation: {float1} 1s ease-out;
  //   animation-duration: 6s;
  //   animation-iteration-count: 7;
  // }
  // &:nth-child(4) {
  //   animation: {float1} 1s ease-out;
  //   animation-duration: 6s;
  //   animation-iteration-count: 4;
  //   animation-delay: 2s;
  // }
  // &:nth-child(5) {
  //   animation: {float2} 1s ease-out;
  //   animation-duration: 5s;
  //   animation-iteration-count: 5;
  // }
  // &:nth-child(6) {
  //   animation: {float2} 1s ease-out;
  //   animation-duration: 6s;
  //   animation-iteration-count: 5;
  //   animation-delay: 3s;
  // }
  // &:nth-child(7) {
  // animation: {float2} 1s ease-out;
  //   animation-duration: 6s;
  //   animation-iteration-count: 3;
  //   animation-delay: 7s;
  // }
`;
