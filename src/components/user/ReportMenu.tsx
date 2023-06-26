import { RIGHT_ARROW } from 'shared/constants/icons';
import useUserData from 'shared/hooks/useUserData';
import useUserChatData from 'shared/query/useUserChatData';
import * as t from './reportMenu.style';

export default function ReportMenuButton() {
  const { channel } = useUserData();
  const { data } = useUserChatData(channel);

  const onClickReport = (date: string) => {};

  return (
    <t.Container>
      <div className="sectionWrapper">
        {!data?.data.myReportList.length ? (
          <p className="noData">
            리포트 리스트는
            <br />
            대화 진행 후 생성됩니다.
          </p>
        ) : (
          <>
            {data?.data.myReportList.map(date => (
              <div className="reportMenu">
                <div className="pointLineWrapper">
                  <div className="point" />
                  <div className="line" />
                </div>
                <section onClick={() => onClickReport(date)}>
                  <p>
                    <span>{date}</span>의 대화 리포트
                  </p>
                  <img src={RIGHT_ARROW} alt="화살표 아이콘" />
                </section>
              </div>
            ))}
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
          </>
        )}
      </div>
    </t.Container>
  );
}
