import * as t from './chip.style';

type Props = {
  text: string;
  idx: number;
  isRound?: boolean;
};

export default function Chip({ text, isRound, idx }: Props) {
  return (
    <t.Container $isRound={isRound} idx={idx}>
      {text}
    </t.Container>
  );
}
