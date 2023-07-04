import * as t from './emotion.style';

interface EmotionProps {
  image: string;
  size?: string;
  isEmotion?: boolean;
  onClick?: () => void;
}

export default function Emotion({
  image,
  size,
  isEmotion,
  onClick,
}: EmotionProps) {
  return (
    <t.Container>
      <t.EmotionImage size={size} onClick={onClick}>
        <img src={image} alt="emotion_image" />
      </t.EmotionImage>
      {isEmotion &&
        Array(10)
          .fill(0)
          .map((item, index) => (
            <t.FloatImage key={index} src={image} alt="emotion_dummy" />
          ))}
    </t.Container>
  );
}
