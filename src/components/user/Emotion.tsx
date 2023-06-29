import { Chip, EmotionData } from 'components';
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
  emoticons: { name: string; count: number }[];
};

export default function Emotion({ idx, emoticons }: Props) {
  const getEmoticon = (name: string) => {
    if (EMOTION_MAPPINGS.hasOwnProperty(name)) {
      const { img } = EMOTION_MAPPINGS[name];
      return img;
    }
  };

  return (
    <t.Container>
      <Chip text={`${idx + 1}번째 대화`} idx={idx} />
      <div className="emotionWrapper">
        {emoticons.map(({ name, count }) => (
          <EmotionData
            imgSrc={getEmoticon(name)}
            name={name}
            count={count}
            key={name}
          />
        ))}
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
