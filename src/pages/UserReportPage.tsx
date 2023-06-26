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
  console.log(detailData);
  return (
    <t.Container>
      <NavBar title="대화 리포트" button="닫기" handleClose={onClose} />
      <InnerBackground />
      <section>
        <p>
          <span>{date}</span>일에는 <span>2</span>번의 대화에 참여했어요.
        </p>
        <div className="bubbleWrapper">
          <Bubble isScrollable>
            <h1>대화는 나에게 이런 영향을 주었어요.</h1>
            <EffectGraph />
          </Bubble>
          <Bubble isScrollable>
            <h1>내가 공감받은 감정은?</h1>
            <Emotion idx={0} name="Like" count={5} />
            <Emotion idx={1} name="Love" count={5} />
            <Emotion idx={2} name="Angry" count={5} />
          </Bubble>
          <Bubble isScrollable>
            <h1>대화 후 나에게 남은 문장은?</h1>
            <Sentence
              idx={0}
              sentence="첫번째 남은 문장첫번째 남은 문장첫번째 남은 문장첫번째 남은 문장첫번째 남은 문장첫번째 남은 문장첫번째 남은 문장첫번째 남은 문장첫번째 남은 문장첫번째 남은 문장"
            />
            <Sentence idx={1} sentence="두번째 남은 문장" />
            <Sentence idx={2} sentence="세번째 남은 문장" />
          </Bubble>
          <Bubble isScrollable>
            <h1>대화의 만족도는?</h1>
            <div className="circleWrapper">
              <Satisfaction idx={0} score={5} />
              <Satisfaction idx={1} score={5} />
              <Satisfaction idx={2} score={5} />
            </div>
          </Bubble>
          <Bubble isScrollable>
            <h1>나에게 남겨진 피드백은?</h1>
            <div className="contentWrapper">
              <Feedback nickname="user7" content="좋았습니다." />
              <Feedback nickname="user8" content="좋았습니다." />
              <Feedback nickname="user9" content="좋았습니다." />
            </div>
          </Bubble>
        </div>
      </section>
    </t.Container>
  );
}
