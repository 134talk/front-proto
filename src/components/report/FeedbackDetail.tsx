import { FeedbackSection, ReportTitle } from 'components';
import useReport from 'shared/query/useReport';
import isMobile from 'shared/utils/deviceDetector';
import * as t from './feedbackDetail.style';

export default function FeedbackDetail() {
  const { feedbackData } = useReport({ types: 'feedback' });

  return (
    <t.Container>
      <t.Scroll $isMobile={isMobile}>
        <ReportTitle text="대화는 우리에게 좋은 영향을 주고 있는걸까?" />
        <FeedbackSection
          title="대화를 하고 우리의 에너지는 이렇게 변했어요."
          value={feedbackData?.data.energy_percent}
        />
        <FeedbackSection
          title="대화를 하고 우리의 관계 이해도는 이렇게 변했어요."
          value={feedbackData?.data.relation_percent}
        />
        <FeedbackSection
          title="대화를 하고 우리의 심리적 안정감은 이렇게 변했어요."
          value={feedbackData?.data.stable_percent}
        />
        <FeedbackSection
          title="대화를 하고 우리의 스트레스는 이렇게 변했어요."
          value={feedbackData?.data.stress_percent}
        />
      </t.Scroll>
    </t.Container>
  );
}
