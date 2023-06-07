import { Background, BarChart, ReportTitle, Section } from 'components';
import * as t from './chatDetail.style';

export default function ChatDetail() {
  return (
    <t.Container>
      <Background />
      <div className="sectionWrapper">
        <ReportTitle text="우리 대화는?" />
        <Section>
          <p className="subtitle">
            대화에서 많은 선택을 받은 대화 주제는 <span>'일'</span> 이에요.
          </p>
          <div className="chartWrapper">
            <BarChart text="일" value="50" />
            <BarChart text="나" value="40" />
            <BarChart text="관계" value="10" />
          </div>
        </Section>
        <Section>
          <p className="subtitle">
            대화하면서 많이 표현한 감정은 <span>'Love'</span> 이에요.
          </p>
          <div className="chartWrapper">
            <BarChart text="Love" value="60" />
            <BarChart text="Like" value="20" />
            <BarChart text="Sad" value="10" />
          </div>
        </Section>
        <Section>
          <p className="subtitle">감정이 많이 오고 간 질문 top3</p>
          <div className="rankWrapper">
            <p>1위</p>
            <p>질문</p>
          </div>
          <div className="rankWrapper">
            <p>2위</p>
            <p>질문</p>
          </div>
          <div className="rankWrapper">
            <p>3위</p>
            <p>질문</p>
          </div>
        </Section>
      </div>
    </t.Container>
  );
}
