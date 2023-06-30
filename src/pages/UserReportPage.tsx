import {
  Bubble,
  EffectGraph,
  Emotion,
  Feedback,
  NavBar,
  Satisfaction,
  Sentence,
} from 'components';
import { useNavigate, useParams } from 'react-router-dom';
import useUserChatData from 'shared/query/useUserChatData';
import { InnerBackground } from 'ui';
import * as t from './userReportPage.style';

export default function UserReportPage() {
  const navigate = useNavigate();
  const onClose = () => navigate('/user?tab=chat');
  const { date } = useParams();

  const { detailData } = useUserChatData(date);

  return (
    <t.Container>
      <NavBar
        isMargin
        title="대화 리포트"
        button="닫기"
        handleClose={onClose}
      />
      <InnerBackground />
      <section>
        <p>
          <span>{date}</span>일에는 <span>{detailData?.data.count}</span>번의
          대화에 참여했어요.
        </p>
        <div className="bubbleWrapper">
          <Bubble isScrollable>
            <h1>대화는 나에게 이런 영향을 주었어요.</h1>
            <EffectGraph
              energy={detailData?.data.effect.energy}
              relation={detailData?.data.effect.relation}
              stable={detailData?.data.effect.stable}
              stress={detailData?.data.effect.stress}
            />
          </Bubble>
          <Bubble isScrollable>
            <h1>내가 공감받은 감정은?</h1>

            {detailData?.data.receivedEmoticons.map((emoticons, idx) => (
              <Emotion key={idx} idx={idx} emoticons={emoticons} />
            ))}
          </Bubble>
          <Bubble isScrollable>
            <h1>대화 후 나에게 남은 문장은?</h1>
            {detailData?.data.remainedSentences.map((sentence, idx) => (
              <Sentence key={idx} idx={idx} sentence={sentence} />
            ))}
          </Bubble>
          <Bubble isScrollable>
            <h1>대화의 만족도는?</h1>
            <div className="circleWrapper">
              {detailData?.data.scores.map((score, idx) => (
                <Satisfaction key={idx} idx={idx} score={score} />
              ))}
            </div>
          </Bubble>
          <Bubble isScrollable>
            <h1>나에게 남겨진 피드백은?</h1>
            <div className="contentWrapper">
              {detailData?.data.feedbacks.map(
                ({ profileImgUrl, nickname, content }, idx) => (
                  <Feedback
                    key={idx}
                    profile={profileImgUrl}
                    nickname={nickname}
                    content={content}
                  />
                )
              )}
            </div>
          </Bubble>
        </div>
      </section>
    </t.Container>
  );
}
