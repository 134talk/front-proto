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
      {!!emoticons.length ? (
        <div className="emotionWrapper">
          {emoticons.map(({ name, count }) => (
            <EmotionData name={name} count={count} key={name} />
          ))}
        </div>
      ) : (
        <p className="noData">공감받은 감정이 없습니다.</p>
      )}
    </t.Container>
  );
}
