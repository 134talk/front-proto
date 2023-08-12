import {
  Bubble,
  EffectGraph,
  EmotionData,
  NavBar,
  PercentChart,
} from 'components';
import { useParams } from 'react-router-dom';
import useReport from 'shared/query/useReport';
import isMobile from 'shared/utils/deviceDetector';
import { InnerBackground } from 'ui';
import * as t from './memberReportPage.style';

export default function MemberReportPage() {
  const onClose = () => (window.location.href = '/report-detail?category=3');

  const { uid } = useParams();

  const { memberData } = useReport({ types: 'member', uid: uid });

  return (
    <>
      <NavBar
        isMargin
        title="대화 리포트"
        button="닫기"
        handleClose={onClose}
      />
      <t.Container>
        <InnerBackground />
        <t.Scroll $isMobile={isMobile}>
          <p>
            <span>
              {memberData?.nickname}
              <span className="name">({memberData?.name})</span>님
            </span>
            은<br /> 총 <span>{memberData?.conversation_count}</span>번의 대화에
            참여했어요.
          </p>
          <div className="bubbleWrapper">
            <Bubble>
              <h1>
                대화는{' '}
                <span>
                  {memberData?.nickname}
                  <span className="name">({memberData?.name})</span>님
                </span>
                에게 이런 영향을 주었어요.
              </h1>
              <EffectGraph
                energy={memberData?.energy_percent}
                relation={memberData?.relation_percent}
                stable={memberData?.stable_percent}
                stress={memberData?.stress_percent}
              />
            </Bubble>
            {!!memberData?.received_emotions?.length && (
              <Bubble>
                <h1>
                  <span>
                    {memberData?.nickname}
                    <span className="name">({memberData?.name})</span>님
                  </span>
                  이 공감받은 감정은?
                  <div className="emotionWrapper">
                    {memberData?.received_emotions?.map(
                      ({ emotion_name, emotion_count }) => (
                        <EmotionData
                          key={emotion_name}
                          name={emotion_name}
                          count={emotion_count}
                        />
                      )
                    )}
                  </div>
                </h1>
              </Bubble>
            )}
            <Bubble>
              <h1>
                <span>
                  {memberData?.nickname}
                  <span className="name">({memberData?.name})</span>님
                </span>
                의 대화의 만족도는?
              </h1>
              <PercentChart
                text="전체 대화 만족도"
                value={memberData?.score_percent}
                isMemberReport
              />
            </Bubble>
          </div>
        </t.Scroll>
      </t.Container>
    </>
  );
}
