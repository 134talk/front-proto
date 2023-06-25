import { FeedbackSection, ReportTitle } from 'components';
import useUserData from 'shared/hooks/useUserData';
import useReport from 'shared/query/useReport';
import * as t from './feedbackDetail.style';

export default function FeedbackDetail() {
  const { channel } = useUserData();
  const { feedbackData } = useReport(channel);

  return (
    <t.Container>
      <div className="sectionWrapper">
        <ReportTitle text="대화는 우리에게 좋은 영향을 주고 있는걸까?" />
        <FeedbackSection
          title="대화를 하고 우리의 에너지는 이렇게 변했어요."
          value={feedbackData?.data.energyPercent}
        />
        <FeedbackSection
          title="대화를 하고 우리의 관계 이해도는 이렇게 변했어요."
          value={feedbackData?.data.relationPercent}
        />
        <FeedbackSection
          title="대화를 하고 우리의 심리적 안정감은 이렇게 변했어요."
          value={feedbackData?.data.stablePercent}
        />
        <FeedbackSection
          title="대화를 하고 우리의 스트레스는 이렇게 변했어요."
          value={feedbackData?.data.stressPercent}
        />
      </div>
    </t.Container>
  );
}
