import { BottomButtonTab } from 'components';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FEED_OPTION_SELECT } from 'shared/constants/constants';
import useUserData from 'shared/hooks/useUserData';
import type { UpdatedFeedback } from 'shared/hooks/useUserFeedbacks';
import useUserFeedbacks from 'shared/hooks/useUserFeedbacks';
import useFeedOption from 'shared/query/useFeedOption';
import useFeedUser from 'shared/query/useFeedUser';
import { Button } from 'ui';
import * as t from './feedOptionReminder.style';

export default function FeedOptionReminder() {
  const { roomId, chatUserId } = useParams();
  const navigate = useNavigate();
  const { optVal, optText } = useUserData();
  const { feedUserList } = useFeedUser(Number(roomId));

  const initialFeedbacks: UpdatedFeedback[] = feedUserList?.map(user => ({
    review_user_id: user.id,
    review_content: '',
    selectedOption: null,
  }));
  const { userFeedbacks, handleSelect, resetFeedbacks } =
    useUserFeedbacks(initialFeedbacks);

  useEffect(() => {
    resetFeedbacks(initialFeedbacks);
  }, [feedUserList]);

  const { mutate } = useFeedOption();
  const handleNext = () => {
    mutate(
      {
        conversation_room_id: Number(roomId),
        conversation_user_id: Number(chatUserId),
        feed_content: optText,
        feed_score: Number(optVal),
        review_list: userFeedbacks.map(
          ({ review_user_id, review_content }) => ({
            review_user_id,
            review_content,
          })
        ),
      },
      {
        onSuccess: () => {
          localStorage.removeItem('optVal');
          localStorage.removeItem('optText');
          navigate(`/feedback/3/${roomId}/${chatUserId}`);
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
          <div className="feedback_wrapper" key={feedback.review_user_id}>
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
                      checked={feedback.selectedOption === item.id}
                      onChange={() =>
                        handleSelect(
                          feedback.review_user_id,
                          'selectedOption',
                          item.id
                        )
                      }
                      id={`${feedback.review_user_id}-${item.id}`}
                    />
                    <t.SelectText
                      htmlFor={`${feedback.review_user_id}-${item.id}`}
                      $isChecked={feedback.selectedOption === item.id}
                    >
                      {item.label}
                    </t.SelectText>
                  </div>
                  {feedback.selectedOption === 6 && item.id === 6 && (
                    <textarea
                      className="select_textarea"
                      placeholder={`${feedUserList[index].name}님과의 대화는 어땠는지 자유롭게 남겨주세요!`}
                      value={feedback.review_content || ''}
                      onChange={e =>
                        handleSelect(
                          feedback.review_user_id,
                          'review_content',
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
