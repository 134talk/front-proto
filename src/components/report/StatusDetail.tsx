import { BarChart, ReportTitle, Section } from 'components';
import useUserData from 'shared/hooks/useUserData';
import useReport from 'shared/query/useReport';
import * as t from './statusDetail.style';

export default function StatusDetail() {
  const { channel } = useUserData();
  const { statusData } = useReport(channel);

  return (
    <t.Container>
      <div className="sectionWrapper">
        <ReportTitle text="지금 우리는?" />
        <Section>
          <p className="subtitle">
            우리는 최근 <span>'{statusData?.data.type1[0].emotion}'</span>
            감정을 많이 느끼고 있어요.
          </p>
          <div className="chartWrapper">
            {statusData?.data.type1.map(({ emotion, score }) => (
              <BarChart key={emotion} text={emotion} value={score} />
            ))}
          </div>
        </Section>
        <Section>
          <p className="subtitle">
            우리 중엔 <span>'{statusData?.data.type2[0].act}'</span> 사람이
            많아요.
          </p>
          <div className="chartWrapper">
            {statusData?.data.type2.map(({ act, score }) => (
              <BarChart key={act} text={act} value={score} />
            ))}
          </div>
        </Section>
        <Section>
          <p className="subtitle">
            우리는 지금 <span>'{statusData?.data.type3[0].status}'</span> 를
            원하는 사람이 많아요.
          </p>
          <div className="chartWrapper">
            {statusData?.data.type3.map(({ status, score }) => (
              <BarChart text={status} value={score} />
            ))}
          </div>
        </Section>
      </div>
    </t.Container>
  );
}
