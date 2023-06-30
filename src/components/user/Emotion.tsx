import { Chip, EmotionData } from 'components';
import * as t from './emotion.style';

type Props = {
  idx: number;
  emoticons: { name: string; count: number }[];
};

export default function Emotion({ idx, emoticons }: Props) {
  return (
    <t.Container>
      <Chip text={`${idx + 1}번째 대화`} idx={idx} />
      <div className="emotionWrapper">
        {emoticons.map(({ name, count }) => (
          <EmotionData name={name} count={count} key={name} />
        ))}
      </div>
    </t.Container>
  );
}
