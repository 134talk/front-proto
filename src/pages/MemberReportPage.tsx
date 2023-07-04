import {
  Bubble,
  EffectGraph,
  EmotionData,
  NavBar,
  PercentChart,
} from 'components';
import { useNavigate, useParams } from 'react-router-dom';
import useReport from 'shared/query/useReport';
import isMobile from 'shared/utils/deviceDetector';
import { InnerBackground } from 'ui';
import * as t from './memberReportPage.style';

export default function MemberReportPage() {
  const navigate = useNavigate();
  const onClose = () => navigate('/report-detail?category=3');

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
              {memberData?.data.nickname}
              <span className="name">({memberData?.data.name})</span>님
            </span>
            은<br /> 총 <span>{memberData?.data.chatCount}</span>번의 대화에
            참여했어요.
          </p>
          <div className="bubbleWrapper">
            <Bubble>
              <h1>
                대화는{' '}
                <span>
                  {memberData?.data.nickname}
                  <span className="name">({memberData?.data.name})</span>님
                </span>
                에게 이런 영향을 주었어요.
              </h1>
              <EffectGraph
                energy={memberData?.data.energyPercent}
                relation={memberData?.data.relationPercent}
                stable={memberData?.data.stablePercent}
                stress={memberData?.data.stressPercent}
              />
            </Bubble>
            {!!memberData?.data.receivedEmoticons.length && (
              <Bubble>
                <h1>
                  <span>
                    {memberData?.data.nickname}
                    <span className="name">({memberData?.data.name})</span>님
                  </span>
                  이 공감받은 감정은?
                  <div className="emotionWrapper">
                    {memberData?.data.receivedEmoticons?.map(
                      ({ emoticon, totalCount }) => (
                        <EmotionData
                          key={emoticon}
                          name={emoticon}
                          count={totalCount}
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
                  {memberData?.data.nickname}
                  <span className="name">({memberData?.data.name})</span>님
                </span>
                의 대화의 만족도는?
              </h1>
              <PercentChart
                text="전체 대화 만족도"
                value={memberData?.data.scorePercent}
                isMemberReport
              />
            </Bubble>
          </div>
        </t.Scroll>
      </t.Container>
    </>
  );
}
