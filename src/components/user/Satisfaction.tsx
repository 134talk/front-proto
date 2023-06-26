import { Chip } from 'components';
import * as t from './satisfaction.style';

type Props = {
  idx: number;
  score: number;
};

export default function Satisfaction({ idx, score }: Props) {
  return (
    <t.Conatainer>
      <Chip isRound text={String(score)} idx={idx} />
      <p>{`${idx + 1}번째 대화`}</p>
    </t.Conatainer>
  );
}
