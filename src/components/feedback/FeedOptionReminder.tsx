import { BottomButtonTab } from 'components';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FEED_OPTION_SELECT } from 'shared/constants/constants';
import type { Feedback } from 'shared/query/useFeedOption';
import useFeedOption from 'shared/query/useFeedOption';
import useFeedUser from 'shared/query/useFeedUser';
import { Button } from 'ui';
import * as t from './feedOptionReminder.style';

type UpdatedFeedback = Feedback & { selectedOption: number | null };
// type UpdatedFeedback = {
//   toUserId: number;
//   review: string;
//   selectedOption: number | null;
// };

export default function FeedOptionReminder() {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const score = localStorage.getItem('optionScore');
  const sentence = localStorage.getItem('optionSentence');
  const { feedUserList } = useFeedUser(Number(roomId));
  const [userFeedbacks, setUserFeedbacks] = useState<UpdatedFeedback[]>([]);
  console.log('userFeedbacks: ', userFeedbacks);
  useEffect(() => {
    const initialFeedbacks: UpdatedFeedback[] = feedUserList?.map(user => ({
      toUserId: user.userId,
      review: '',
      selectedOption: null,
    }));
    setUserFeedbacks(initialFeedbacks);
  }, [feedUserList]);

  // 임시 수정
  const handleSelect = (
    userId: number,
    field: keyof UpdatedFeedback,
    value: string | number
  ) => {
    if (value === 6) {
      setUserFeedbacks(prev =>
        prev.map(item =>
          item.toUserId === userId ? { ...item, [field]: value } : item
        )
      );
    } else {
      const matchedFeedback = FEED_OPTION_SELECT.find(
        item => item.id === value
      );
      setUserFeedbacks(prev =>
        prev.map(item =>
          item.toUserId === userId
            ? { ...item, [field]: matchedFeedback.label }
            : item
        )
      );
    }
  };

  const { mutate } = useFeedOption();
  const handleNext = () => {
    mutate(
      {
        roomId: Number(roomId),
        sentence: sentence,
        score: Number(score),
        feedback: userFeedbacks.map(({ selectedOption, ...rest }) => rest),
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
                      checked={feedback.selectedOption === item.id}
                      onChange={() =>
                        handleSelect(
                          feedback.toUserId,
                          'selectedOption',
                          item.id
                        )
                      }
                      id={`${feedback.toUserId}-${item.id}`}
                    />
                    <t.SelectText
                      htmlFor={`${feedback.toUserId}-${item.id}`}
                      $isChecked={feedback.selectedOption === item.id}
                    >
                      {item.label}
                    </t.SelectText>
                  </div>
                  {item.id === 6 && feedback.selectedOption && (
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
