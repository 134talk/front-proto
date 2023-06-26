import * as t from './effectGraph.style';

export default function EffectGraph() {
  return (
    <t.Container>
      <p>에너지</p>
      <Graph value={100} />
      <p>관계 이해</p>
      <Graph value={30} />
      <p>심리적 안정</p>
      <Graph value={-50} />
      <p>스트레스</p>
      <Graph value={-80} />
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
