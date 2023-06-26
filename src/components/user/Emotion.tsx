import { Chip, EmotionData } from 'components';
import { useEffect, useState } from 'react';
import {
  EMOTION_ANGRY,
  EMOTION_HUG,
  EMOTION_LIKE,
  EMOTION_LOVE,
  EMOTION_RIGHT,
  EMOTION_SAD,
} from 'shared/constants/icons';
import * as t from './emotion.style';

type Props = {
  idx: number;
  name: string;
  count: number;
};

export default function Emotion({ idx, name, count }: Props) {
  const [emotionIcon, setEmotionIcon] = useState('');
  useEffect(() => {
    if (EMOTION_MAPPINGS.hasOwnProperty(name)) {
      const { img } = EMOTION_MAPPINGS[name];
      setEmotionIcon(img);
    }
  }, [name]);

  return (
    <t.Container>
      <Chip text={`${idx + 1}번째 대화`} idx={idx} />
      <div className="emotionWrapper">
        <EmotionData imgSrc={emotionIcon} name={name} count={count} />
        <EmotionData imgSrc={emotionIcon} name={name} count={count} />
        <EmotionData imgSrc={emotionIcon} name={name} count={count} />
      </div>
    </t.Container>
  );
}

type Mappings = {
  [key: string]: {
    img: string;
  };
};

const EMOTION_MAPPINGS: Mappings = {
  Love: { img: EMOTION_LOVE },
  Like: { img: EMOTION_LIKE },
  Hug: { img: EMOTION_HUG },
  Sad: { img: EMOTION_SAD },
  Right: { img: EMOTION_RIGHT },
  Angry: { img: EMOTION_ANGRY },
};
