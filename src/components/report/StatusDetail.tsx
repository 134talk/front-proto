import { BarChart, Bubble, ReportTitle } from 'components';
import useReport from 'shared/query/useReport';
import * as t from './statusDetail.style';

export default function StatusDetail() {
  const { statusData } = useReport('status');

  return (
    <t.Container>
      <div className="sectionWrapper">
        <ReportTitle text="지금 우리는?" />
        <Bubble isScrollable>
          <h1>
            우리는 최근 <span>'{statusData?.data.type1[0].emotion}'</span>{' '}
            감정을 많이 느끼고 있어요.
          </h1>
          {statusData?.data.type1.map(({ emotion, score }) => (
            <BarChart key={emotion} text={emotion} value={score} />
          ))}
        </Bubble>
        <Bubble isScrollable>
          <h1>
            우리 중엔 <span>'{statusData?.data.type2[0].act}'</span> 사람이
            많아요.
          </h1>
          {statusData?.data.type2.map(({ act, score }) => (
            <BarChart key={act} text={act} value={score} />
          ))}
        </Bubble>
        <Bubble isScrollable>
          <h1>
            우리는 지금 <span>'{statusData?.data.type3[0].status}'</span> 를
            원하는 사람이 많아요.
          </h1>
          {statusData?.data.type3.map(({ status, score }) => (
            <BarChart key={status} text={status} value={score} />
          ))}
        </Bubble>
      </div>
    </t.Container>
  );
}
