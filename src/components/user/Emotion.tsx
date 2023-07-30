import { Chip, EmotionData } from 'components';
import * as t from './emotion.style';

type Props = {
  idx: number;
  emoticons: { emotion_name: string; emotion_count: number }[];
};

export default function Emotion({ idx, emoticons }: Props) {
  return (
    <t.Container>
      <Chip text={`${idx + 1}번째 대화`} idx={idx} />
      {!!emoticons.length ? (
        <div className="emotionWrapper">
          {emoticons.map(({ emotion_name, emotion_count }) => (
            <EmotionData
              name={emotion_name}
              count={emotion_count}
              key={emotion_name}
            />
          ))}
        </div>
      ) : (
        <p className="noData">공감받은 감정이 없습니다.</p>
      )}
    </t.Container>
  );
}
