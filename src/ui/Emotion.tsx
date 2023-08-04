import { keyframes, styled } from 'styled-components';

interface Props {
  image: string;
  size?: string;
  isEmotion?: boolean;
  onClick?: () => void;
}

export default function Emotion({ image, size, isEmotion, onClick }: Props) {
  return (
    <Container>
      <EmotionImage size={size} onClick={onClick}>
        <img src={image} alt="emotion_image" />
      </EmotionImage>
      {isEmotion &&
        Array(10)
          .fill(0)
          .map((item, index) => (
            <FloatImage key={index} src={image} alt="emotion_dummy" />
          ))}
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
    transform: scale(1) translate(0, -700px);
  }
`;
const FloatImage = styled.img.attrs(props => ({
  style: {
    left: `${Math.random() * 100}%`,
    bottom: `${40 + Math.random() * 10}px`,
    width: `${5 + Math.random() * 10}%`,
    animationDuration: `${4}s`,
    animationIterationCount: `${Math.floor(2 + Math.random() * 2)}`,
    animationDelay: `${Math.random() * 3}s`,
  },
}))`
  position: absolute;
  justify-content: center;
  align-items: center;
  display: flex;
  animation: ${floatAnim} ease-in-out;
  animation-fill-mode: forwards;
`;
