import { useEffect, useState } from 'react';
import {
  EMOTION_ANGRY,
  EMOTION_HUG,
  EMOTION_LIKE,
  EMOTION_LOVE,
  EMOTION_RIGHT,
  EMOTION_SAD,
} from 'shared/constants/icons';
import * as t from './emotionData.style';

type Props = {
  name: string;
  count: number;
};

export default function EmotionData({ name, count }: Props) {
  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    if (EMOTION_MAPPINGS.hasOwnProperty(name)) {
      const { img } = EMOTION_MAPPINGS[name];
      setImgSrc(img);
    }
  }, [name]);

  return (
    <t.Container>
      <img src={imgSrc} alt="이모티콘" />
      <p>
        {name} <span>{count}</span>
      </p>
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
