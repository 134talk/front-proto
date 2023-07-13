import { Bubble, NavBar } from 'components';
import { useNavigate } from 'react-router-dom';
import { RIGHT_ARROW } from 'shared/constants/icons';
import useUserData from 'shared/hooks/useUserData';
import * as t from './reportPage.style';

export default function ReportPage() {
  const navigate = useNavigate();

  const { isAdmin } = useUserData();
  console.log(isAdmin);
  const onClickMenu = (index: number) =>
    navigate(`/report-detail?category=${index}`);

  return (
    <>
      <NavBar isCenter={true} title="리포트" isMargin />
      <t.Container>
        <div className="wrapper">
          <Bubble isClickable onClick={() => onClickMenu(0)}>
            <section>
              <div>
                <h1 className="title">지금 우리는?</h1>
                <span className="subTitle">참가자 성향 from 닉네임</span>
              </div>
              <img src={RIGHT_ARROW} alt="화살표" />
            </section>
          </Bubble>
          <Bubble isClickable onClick={() => onClickMenu(1)}>
            <section>
              <div>
                <h1 className="title">우리 대화는?</h1>
                <span className="subTitle">
                  핫한 대화 질문, 감정 from 대화 기록
                </span>
              </div>
              <img src={RIGHT_ARROW} alt="화살표" />
            </section>
          </Bubble>
          <Bubble isClickable onClick={() => onClickMenu(2)}>
            <section>
              <div>
                <h1 className="title">
                  대화는 우리에게 <br /> 좋은 영향을 주고 있는걸까?
                </h1>
                <span className="subTitle">
                  대화 후 참가자 상태 from 피드백
                </span>
              </div>
              <img src={RIGHT_ARROW} alt="화살표" />
            </section>
          </Bubble>
          {isAdmin === 'true' && (
            <Bubble isClickable onClick={() => onClickMenu(3)}>
              <section>
                <div>
                  <h1 className="title">팀원별 종합 리포트</h1>
                  <span className="subTitle">
                    대화 후 참가자 상태 from 피드백 & 대화 기록
                  </span>
                </div>
                <img src={RIGHT_ARROW} alt="화살표" />
              </section>
            </Bubble>
          )}
        </div>
      </t.Container>
    </>
  );
}
