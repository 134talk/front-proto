import { BottomButtonTab } from 'components';
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useFeedUser from 'shared/query/useFeedUser';
import { Button } from 'ui';
import * as t from './feedOptionReminder.style';

const SELECT = [
  { id: 0, label: '몰랐던 면을 알게 됬어요.', check: false },
  { id: 1, label: '또 이야기 나눠요.', check: false },
  { id: 2, label: '오늘 좋았습니다.', check: false },
  { id: 3, label: '역시 반가웠습니다.', check: false },
  { id: 4, label: '더 친해져요.', check: false },
  { id: 5, label: '직접 글쓰기', check: true },
];
export default function FeedOptionReminder() {
  const [selectedId, setSelectedId] = useState(null);
  const [searchParams] = useSearchParams();
  const roomId = searchParams.get('roomId');
  const navigate = useNavigate();
  const handleNext = () => {
    navigate('/feedback/3');
  };
  const { feedUserList } = useFeedUser(Number(roomId));
  console.log('feedUserList: ', feedUserList);
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
        <p className="question_text">'00' 님과의 대화는 어땠나요?</p>
        <ul>
          {SELECT.map(item => (
            <li key={item.id}>
              <div className="select_wrapper">
                <input
                  className="select_input"
                  type="radio"
                  checked={selectedId === item.id}
                  onChange={() => setSelectedId(item.id)}
                  id={String(item.id)}
                />
                <t.SelectText
                  htmlFor={String(item.id)}
                  $isChecked={selectedId === item.id}
                >
                  {item.label}
                </t.SelectText>
              </div>
              {item.check === true && (
                <textarea
                  className="select_textarea"
                  placeholder="00님과의 대화는 어땠는지 자유롭게 남겨주세요!"
                />
              )}
            </li>
          ))}
        </ul>
      </t.RemindWrapper>
      <BottomButtonTab>
        <Button category="confirm" text="다음" onClick={handleNext} />
      </BottomButtonTab>
    </t.Container>
  );
}
