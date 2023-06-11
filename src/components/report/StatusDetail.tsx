import { BarChart, ReportTitle, Section } from 'components';
import * as t from './statusDetail.style';

export default function StatusDetail() {
  return (
    <t.Container>
      <div className="sectionWrapper">
        <ReportTitle text="지금 우리는?" />
        <Section>
          <p className="subtitle">
            우리는 최근 <span>'희망이 조금씩 생기는'</span> 감정을 많이 느끼고
            있어요.
          </p>
          <div className="chartWrapper">
            <BarChart text="희망이 조금씩 생기는" value="50" />
            <BarChart text="속이 타는 마음" value="40" />
            <BarChart text="고요하고 감사한" value="10" />
          </div>
        </Section>
        <Section>
          <p className="subtitle">
            우리 중엔 <span>'경청을 잘하고, 의견을 조율하는'</span> 사람이
            많아요.
          </p>
          <div className="chartWrapper">
            <BarChart text="경청을 잘하고, 의견을 조율하는" value="60" />
            <BarChart text="열정적인 목표 달성과 리더십" value="20" />
            <BarChart text="치밀한 계획과 효율이 중요한" value="10" />
          </div>
        </Section>
        <Section>
          <p className="subtitle">
            우리는 지금 <span>'성과달성/보상받기'</span> 를 원하는 사람이
            많아요.
          </p>
          <div className="chartWrapper">
            <BarChart text="성과달성/보상받기" value="50" />
            <BarChart text="배움/성장" value="20" />
            <BarChart text="공감/평화" value="10" />
          </div>
        </Section>
      </div>
    </t.Container>
  );
}
