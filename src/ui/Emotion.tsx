import { keyframes, styled } from 'styled-components';

interface EmotionProps {
  image: string;
  size?: string;
  isEmotion?: boolean;
  onClick?: () => void;
}

const floatUp = keyframes`
  0% {
    transform: scale(0) translate(0, 0);
    width: 80%;
    opacity: 1;
  }
  100% {
    transform: scale(1) translate(0, -100px);
    width: 80%;
    opacity: 0;
  }
`;
const float = keyframes`
  0% {
    transform: scale(0) translate(0, 0);
    width: 60%;
    opacity: 1;
  }
  100% {
    transform: scale(1) translate(0, -180px);
    width: 60%;
    opacity: 0;
  }
`;
const floatLong = keyframes`
  0% {
    transform: scale(0) translate(0, 0);
    width: 30%;
    opacity: 1;
  }
  50% {
    transform: scale(0.5) translate(20px, -100px);
    width: 50%;
    opacity: 1;
  }
  100% {
    transform: scale(1) translate(0, -240px);
    width: 50%;
    opacity: 0;
  }
`;
const floatLeftUp = keyframes`
  0% {
    transform: scale(0) translate(0, 0);
    width: 60%;
    opacity: 1;
  }
  50% {
    transform: scale(0.4) translate(-30px, -100px);
    width: 60%;
    opacity: 0.5;
  }
  65% {
    transform: scale(0.5) translate(-30px, -140px);
    width: 60%;
    opacity: 0.5;
  }
  100% {
    transform: scale(1) translate(-30px, -200px);
    width: 30%;
    opacity: 0;
  }
`;
const floatRightUp = keyframes`
  0% {
    transform: scale(0) translate(0, 0);
    width: 40%;
    opacity: 1;
  }
  50% {
    transform: scale(0.4) translate(20px, -120px);
    width: 40%;
    opacity: 0.5;
  }
  65% {
    transform: scale(0.5) translate(20px, -180px);
    width: 40%;
    opacity: 0.5;
  }
  100% {
    transform: scale(1) translate(20px, -220px);
    width: 10%;
    opacity: 0;
  }
`;

export default function Emotion({
  image,
  size,
  isEmotion,
  onClick,
}: EmotionProps) {
  return (
    <Container>
      <EmotionImage size={size} onClick={onClick}>
        <img className="main_image" src={image} alt="main_image" />
        {isEmotion && (
          <>
            <img className="emotion_image" src={image} alt="emotion_dummy" />
            <img className="emotion_image" src={image} alt="emotion_dummy" />
            <img className="emotion_image" src={image} alt="emotion_dummy" />
            <img className="emotion_image" src={image} alt="emotion_dummy" />
            <img className="emotion_image" src={image} alt="emotion_dummy" />
            <img className="emotion_image" src={image} alt="emotion_dummy" />
            <img className="emotion_image" src={image} alt="emotion_dummy" />
            <img className="emotion_image" src={image} alt="emotion_dummy" />
            <img className="emotion_image" src={image} alt="emotion_dummy" />
            <img className="emotion_image" src={image} alt="emotion_dummy" />
            <img className="emotion_image" src={image} alt="emotion_dummy" />
            <img className="emotion_image" src={image} alt="emotion_dummy" />
            <img className="emotion_image" src={image} alt="emotion_dummy" />
            <img className="emotion_image" src={image} alt="emotion_dummy" />
            <img className="emotion_image" src={image} alt="emotion_dummy" />
            <img className="emotion_image" src={image} alt="emotion_dummy" />
            <img className="emotion_image" src={image} alt="emotion_dummy" />
            <img className="emotion_image" src={image} alt="emotion_dummy" />
            <img className="emotion_image" src={image} alt="emotion_dummy" />
            <img className="emotion_image" src={image} alt="emotion_dummy" />
            <img className="emotion_image" src={image} alt="emotion_dummy" />
            <img className="emotion_image" src={image} alt="emotion_dummy" />
            <img className="emotion_image" src={image} alt="emotion_dummy" />
            <img className="emotion_image" src={image} alt="emotion_dummy" />
            <img className="emotion_image" src={image} alt="emotion_dummy" />
          </>
        )}
      </EmotionImage>
    </Container>
  );
}

const Container = styled.div`
  background-color: #e9ecef;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const EmotionImage = styled.div<{ size: string }>`
  width: ${props => (props.size ? props.size : '3rem')};
  height: ${props => (props.size ? props.size : '3rem')};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    &.main_image {
      position: absolute;
    }
    &.emotion_image {
      z-index: 1;
      position: absolute;
    }
    &:nth-child(2) {
      animation: ${float} 100ms ease-in-out;
      animation-duration: 6s;
    }
    &:nth-child(3) {
      animation: ${float} 100ms ease-in-out;
      animation-duration: 8s;
    }
    &:nth-child(4) {
      animation: ${float} 100ms ease-in-out;
      animation-duration: 10s;
    }
    &:nth-child(5) {
      animation: ${float} 100ms ease-in-out;
      animation-duration: 12s;
    }
    &:nth-child(6) {
      animation: ${float} 100ms ease-in-out;
      animation-duration: 14s;
    }
    &:nth-child(7) {
      animation: ${floatUp} 100ms ease-in-out;
      animation-duration: 7s;
    }
    &:nth-child(8) {
      animation: ${floatUp} 100ms ease-in-out;
      animation-duration: 8s;
    }
    &:nth-child(9) {
      animation: ${floatUp} 100ms ease-in-out;
      animation-duration: 9s;
    }
    &:nth-child(10) {
      animation: ${floatUp} 100ms ease-in-out;
      animation-duration: 10s;
    }
    &:nth-child(11) {
      animation: ${floatUp} 100ms ease-in-out;
      animation-duration: 11s;
    }
    &:nth-child(12) {
      animation: ${floatLong} 100ms ease-in-out;
      animation-duration: 6s;
    }
    &:nth-child(13) {
      animation: ${floatLong} 100ms ease-in-out;
      animation-duration: 8s;
    }
    &:nth-child(14) {
      animation: ${floatLong} 100ms ease-in-out;
      animation-duration: 10s;
    }
    &:nth-child(15) {
      animation: ${floatLong} 100ms ease-in-out;
      animation-duration: 12s;
    }
    &:nth-child(16) {
      animation: ${floatLong} 100ms ease-in-out;
      animation-duration: 14s;
    }
    &:nth-child(17) {
      animation: ${floatLeftUp} 100ms ease-in-out;
      animation-duration: 6s;
    }
    &:nth-child(18) {
      animation: ${floatLeftUp} 100ms ease-in-out;
      animation-duration: 7s;
    }
    &:nth-child(19) {
      animation: ${floatLeftUp} 100ms ease-in-out;
      animation-duration: 8s;
    }
    &:nth-child(20) {
      animation: ${floatLeftUp} 100ms ease-in-out;
      animation-duration: 9s;
    }
    &:nth-child(21) {
      animation: ${floatLeftUp} 100ms ease-in-out;
      animation-duration: 10s;
    }
    &:nth-child(22) {
      animation: ${floatRightUp} 100ms ease-in-out;
      animation-duration: 6s;
    }
    &:nth-child(23) {
      animation: ${floatRightUp} 100ms ease-in-out;
      animation-duration: 8s;
    }
    &:nth-child(24) {
      animation: ${floatRightUp} 100ms ease-in-out;
      animation-duration: 10s;
    }
    &:nth-child(25) {
      animation: ${floatRightUp} 100ms ease-in-out;
      animation-duration: 12s;
    }
    &:nth-child(26) {
      animation: ${floatRightUp} 100ms ease-in-out;
      animation-duration: 14s;
    }
  }
`;
