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
  const { uId } = useUserData();
  const { roomId } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // 선택한 키워드 리스트 state
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
  // 선택한 키워드 리스트 소켓 메세지 발행 & 구독
  const handleSubmitKeyword = () => {
    dispatch({
      type: 'sendData',
      payload: {
        destination: '/pub/select/keyword',
        data: {
          roomId: Number(roomId),
          userId: Number(uId),
          keywordCode: selectedKeywords,
        },
      },
    });
    dispatch(subscribeKeyword(`/sub/chat/keyword/${roomId}/${uId}`));
    navigate(`/chat/${roomId}/3`);
  };

  return (
    <t.Container>
      <NavBar isCenter={true} title="대화방" />
      <p className="guIde_text">키워드 3개를 선택해주세요.</p>
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
      <div className="button_wrapper">
        <Button
          category="confirm"
          text="키워드 선택하기"
          disabled={!canSubmit}
          onClick={handleSubmitKeyword}
        />
      </div>
    </t.Container>
  );
}
