import { KeywordList, NavBar } from 'components';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { KEYWORD_LIST } from 'shared/constants/constants';
import useUserData from 'shared/hooks/useUserData';
import { subscribeKeyword } from 'shared/store/chatAction';
import { useAppDispatch } from 'shared/store/store';
import { Button } from 'ui';
import * as t from './keywordScreen.style';

export default function KeywordScreen() {
  const { roomId } = useParams();
  const { uid } = useUserData();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [selectedKeywords, setSelectedKeywords] = useState<number[]>([]);
  const canSubmit = selectedKeywords.length > 2;
  const handleSelectKeyword = (keyword: number) => {
    if (selectedKeywords.length > 2 && !selectedKeywords.includes(keyword))
      toast.error('키워드는 3개 이상 선택할 수 없습니다.');
    else if (
      selectedKeywords.length < 3 &&
      !selectedKeywords.includes(keyword)
    ) {
      setSelectedKeywords([...selectedKeywords, keyword]);
    } else {
      const deleteKeywords = selectedKeywords.filter(item => item !== keyword);
      setSelectedKeywords(deleteKeywords);
    }
  };
  const handleSubmitKeyword = () => {
    dispatch({
      type: 'sendData',
      payload: {
        destination: '/pub/select/keyword',
        data: {
          roomId: roomId,
          userId: uid,
          selected: true,
          keywordCode: selectedKeywords,
        },
      },
    });
    dispatch(subscribeKeyword(`/sub/chat/keyword/${roomId}/${uid}`));
    navigate(`/chat/${roomId}/3`);
  };

  return (
    <t.Container>
      <NavBar isCenter={true} title="대화방" />
      <p className="guide_text">키워드 3개를 선택해주세요.</p>
      <div className="card_wrapper">
        {KEYWORD_LIST.map(item => (
          <KeywordList
            key={item.id}
            keyword={item.keyword}
            lineColor={item.color[0]}
            fillColor={item.color[1]}
            selected={selectedKeywords.includes(item.id) && true}
            onClick={() => handleSelectKeyword(item.id)}
          />
        ))}
      </div>
      <Button
        category="confirm"
        text="키워드 선택하기"
        disabled={!canSubmit}
        onClick={handleSubmitKeyword}
      />
    </t.Container>
  );
}
