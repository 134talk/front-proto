import * as t from './effectGraph.style';

type Props = {
  energy: number;
  relation: number;
  stable: number;
  stress: number;
};

export default function EffectGraph({
  energy,
  relation,
  stable,
  stress,
}: Props) {
  return (
    <t.Container>
      <p>에너지</p>
      <Graph value={energy} />
      <p>관계 이해</p>
      <Graph value={relation} />
      <p>심리적 안정</p>
      <Graph value={stable} />
      <p>스트레스</p>
      <Graph value={stress} />
    </t.Container>
  );
}

type GraphProps = {
  value: number;
};

function Graph({ value }: GraphProps) {
  return (
    <t.GraphContainer>
      <div className="negative">
        <p>{value < 0 ? value : '-0'}%</p>
        <t.NegativeBar value={value < 0 ? Math.abs(value) : 0} />
      </div>
      <div className="positive">
        <t.PositiveBar value={value > 0 ? Math.abs(value) : 0} />
        <p>{value > 0 ? `+${value}` : '+0'}%</p>
      </div>
    </t.GraphContainer>
  );
}
