import { useNavigate } from 'react-router-dom';
import { RIGHT_ARROW } from 'shared/constants/icons';
import useUserChatData from 'shared/query/useUserChatData';
import * as t from './reportMenu.style';

export default function ReportMenuButton() {
  const navigate = useNavigate();

  const { dateList } = useUserChatData();

  const onClickReport = (rId: number) => navigate(`/user/${rId}`);

  return (
    <t.Container>
      <div className="sectionWrapper">
        {!dateList?.length ? (
          <p className="noData">
            리포트 리스트는
            <br />
            대화 진행 후 생성됩니다.
          </p>
        ) : (
          <>
            {dateList?.map(({ report_date, report_id }) => (
              <div className="reportMenu" key={report_id}>
                <div className="pointLineWrapper">
                  <div className="point" />
                  <div className="line" />
                </div>
                <section onClick={() => onClickReport(report_id)}>
                  <p>
                    <span>{report_date}</span>의 대화 리포트
                  </p>
                  <img src={RIGHT_ARROW} alt="화살표 아이콘" />
                </section>
              </div>
            ))}
          </>
        )}
      </div>
    </t.Container>
  );
}
