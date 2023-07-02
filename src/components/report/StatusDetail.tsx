import { BarChart, Bubble, ReportTitle } from 'components';
import useReport from 'shared/query/useReport';
import isMobile from 'shared/utils/deviceDetector';
import * as t from './statusDetail.style';

export default function StatusDetail() {
  const { statusData } = useReport({ types: 'status' });

  return (
    <t.Container>
      <t.Scroll $isMobile={isMobile}>
        <ReportTitle text="지금 우리는?" />
        <Bubble>
          <h1>
            우리는 최근 <span>'{statusData?.data.type1[0].emotion}'</span>{' '}
            감정을 많이 느끼고 있어요.
          </h1>
          <div className="chartWrapper">
            {statusData?.data.type1.map(({ emotion, emotionCount }) => (
              <BarChart
                key={emotion}
                text={emotion}
                value={emotionCount}
                isImage
              />
            ))}
          </div>
        </Bubble>
        <Bubble>
          <h1>
            우리 중엔 <span>'{statusData?.data.type2[0].act}'</span> 사람이
            많아요.
          </h1>
          <div className="chartWrapper">
            {statusData?.data.type2.map(({ act, actCount }) => (
              <BarChart key={act} text={act} value={actCount} isImage />
            ))}
          </div>
        </Bubble>
        <Bubble>
          <h1>
            우리는 지금 <span>'{statusData?.data.type3[0].status}'</span> 를
            원하는 사람이 많아요.
          </h1>
          <div className="chartWrapper">
            {statusData?.data.type3.map(({ status, statusCount }) => (
              <BarChart
                key={status}
                text={status}
                value={statusCount}
                isImage
              />
            ))}
          </div>
        </Bubble>
      </t.Scroll>
    </t.Container>
  );
}
