import { RIGHT_ARROW } from 'shared/constants/icons';
import * as t from './reportMenu.style';

export default function ReportMenuButton() {
  return (
    <t.Container>
      <div className="sectionWrapper">
        <div className="reportMenu">
          <div className="pointLineWrapper">
            <div className="point" />
            <div className="line" />
          </div>
          <section>
            <p>
              <span>2023/06/08</span>의 대화 리포트
            </p>
            <img src={RIGHT_ARROW} alt="화살표 아이콘" />
          </section>
        </div>
        <div className="reportMenu">
          <div className="pointLineWrapper">
            <div className="point" />
            <div className="line" />
          </div>
          <section>
            <p>
              <span>2023/06/08</span>의 대화 리포트
            </p>
            <img src={RIGHT_ARROW} alt="화살표 아이콘" />
          </section>
        </div>
        <div className="reportMenu">
          <div className="pointLineWrapper">
            <div className="point" />
            <div className="line" />
          </div>
          <section>
            <p>
              <span>2023/06/08</span>의 대화 리포트
            </p>
            <img src={RIGHT_ARROW} alt="화살표 아이콘" />
          </section>
        </div>
      </div>
    </t.Container>
  );
}
