import * as t from './percentChart.style';

type Props = {
  text: string;
  value: number;
  isMemberReport?: boolean;
  color?: string;
};

export default function PercentChart({
  text,
  value,
  isMemberReport,
  color,
}: Props) {
  return (
    <t.Container>
      <div className="textWrapper">
        <p>{text}</p>
        {isMemberReport ? <p>{value}점</p> : <p>{value}%</p>}
      </div>
      <t.Bar>
        <t.Percent
          value={value}
          color={color}
          $isMemberReport={isMemberReport}
        />
      </t.Bar>
    </t.Container>
  );
}
