import { ChartIcon, PercentChart } from 'components';
import useChartIcons from 'shared/hooks/useChartIcons';
import * as t from './barChart.style';

type Props = {
  text: string;
  value: number;
  isImage?: boolean;
};

export default function BarChart({ text, value, isImage }: Props) {
  const { selectedImg, selectedColor } = useChartIcons(text);

  return (
    <t.Container>
      <ChartIcon color={selectedColor}>
        {isImage ? (
          <img src={selectedImg} alt="아이콘" />
        ) : (
          <p>{selectedImg}</p>
        )}
      </ChartIcon>
      <div className="chart">
        <PercentChart text={text} value={value} color={selectedColor} />
      </div>
    </t.Container>
  );
}
