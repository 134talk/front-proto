import { BottomButtonTab } from 'components';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FEED_OPTION_SELECT } from 'shared/constants/constants';
import useUserData from 'shared/hooks/useUserData';
import type { Feedback } from 'shared/query/useFeedOption';
import useFeedOption from 'shared/query/useFeedOption';
import useFeedUser from 'shared/query/useFeedUser';
import { Button } from 'ui';
import * as t from './feedOptionReminder.style';

export default function FeedOptionReminder() {
  const { roomId } = useParams();
  const { uid } = useUserData();
  const navigate = useNavigate();
  const score = localStorage.getItem('optionScore');
  const sentence = localStorage.getItem('optionSentence');
  const { feedUserList } = useFeedUser(Number(roomId));
  const [userFeedbacks, setUserFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    if (!feedUserList) return;
    const setFeedList = feedUserList?.filter(
      item => item.userId !== Number(uid)
    );
    const initialFeedbacks: Feedback[] = setFeedList.map(user => ({
      toUserId: user.userId,
      review: '',
      feedbackScore: null,
    }));
    setUserFeedbacks(initialFeedbacks);
  }, [feedUserList]);

  const handleSelect = (
    userId: number,
    field: keyof Feedback,
    value: string | number
  ) => {
    setUserFeedbacks(prev =>
      prev.map(item =>
        item.toUserId === userId ? { ...item, [field]: value } : item
      )
    );
  };

  const { mutate } = useFeedOption();
  const handleNext = () => {
    mutate(
      {
        roomId: Number(roomId),
        sentence: sentence,
        score: Number(score),
        feedback: userFeedbacks,
      },
      {
        onSuccess: () => {
          localStorage.removeItem('optionScore');
          localStorage.removeItem('optionSentence');
          navigate(`/feedback/3/${roomId}`);
        },
      }
    );
  };

  return (
    <t.Container>
      <div className="title_wrapper">
        <p className="title_text">
          대화에 참여한 분들에게
          <br />
          피드백을 남겨주세요.
        </p>
        <p className="sub_text">
          피드백이 없다면 <strong>다음</strong>으로 넘어가주세요.
        </p>
      </div>
      <t.RemindWrapper>
        {userFeedbacks?.map((feedback, index) => (
          <div className="feedback_wrapper" key={feedback.toUserId}>
            <p className="question_text">
              '{feedUserList[index].nickname}({feedUserList[index].name})'
              님과의 <br />
              대화는 어땠나요?
            </p>
            <ul>
              {FEED_OPTION_SELECT.map(item => (
                <li key={item.id}>
                  <div className="select_wrapper">
                    <input
                      className="select_input"
                      type="radio"
                      checked={feedback.feedbackScore === item.id}
                      onChange={() =>
                        handleSelect(
                          feedback.toUserId,
                          'feedbackScore',
                          item.id
                        )
                      }
                      id={String(item.id)}
                    />
                    <t.SelectText
                      htmlFor={String(item.id)}
                      $isChecked={feedback.feedbackScore === item.id}
                    >
                      {item.label}
                    </t.SelectText>
                  </div>
                  {item.id === 6 && feedback.feedbackScore === item.id && (
                    <textarea
                      className="select_textarea"
                      placeholder={`${feedUserList[index].name}님과의 대화는 어땠는지 자유롭게 남겨주세요!`}
                      value={feedback.review || ''}
                      onChange={e =>
                        handleSelect(
                          feedback.toUserId,
                          'review',
                          e.target.value
                        )
                      }
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </t.RemindWrapper>
      <BottomButtonTab>
        <Button category="confirm" text="다음" onClick={handleNext} />
      </BottomButtonTab>
    </t.Container>
  );
}
