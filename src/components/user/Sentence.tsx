import { Chip } from 'components';
import * as t from './sentence.style';

type Props = {
  idx: number;
  sentence: string;
};

export default function Sentence({ idx, sentence }: Props) {
  return (
    <t.Container>
      <Chip text={`${idx + 1}번째 대화`} idx={idx} />
      {sentence.length ? (
        <p>{sentence}</p>
      ) : (
        <p className="noData">남긴 문장이 없습니다.</p>
      )}
    </t.Container>
  );
}
