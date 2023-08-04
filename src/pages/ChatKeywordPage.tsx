import {
  BottomButtonTab,
  ExitConfirmModal,
  KeywordList,
  NavBar,
} from 'components';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { KEYWORD_LIST } from 'shared/constants/constants';
import useModal from 'shared/hooks/useModal';
import useUserData from 'shared/hooks/useUserData';
import useChatFlag from 'shared/query/useChatFlag';
import useKeyword from 'shared/query/useKeyword';
import { Button } from 'ui';
import * as t from './chatKeywordPage.style';

export default function ChatKeywordPage() {
  const exitConfirmModal = useModal();
  const { channel } = useUserData();
  const { roomId, chatUserId } = useParams();
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);
  const canSubmit = selectedKeywords.length > 2;
  const handleSelectKeyword = (keyword: string) => {
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
  const { mutate } = useChatFlag();
  const { keywordFlag, postMutate, putMutate } = useKeyword(
    Number(roomId),
    Number(chatUserId)
  );

  const handleSubmitKeyword = () => {
    if (keywordFlag === 2)
      postMutate({
        conversation_room_id: Number(roomId),
        conversation_user_id: Number(chatUserId),
        keyword_code: selectedKeywords,
      });
    else if (keywordFlag === 1) {
      putMutate({
        conversation_room_id: Number(roomId),
        conversation_user_id: Number(chatUserId),
        keyword_code: selectedKeywords,
      });
      localStorage.setItem('selectKey', 'true');
    }
  };
  useEffect(() => {
    if (keywordFlag === 0) {
      mutate({
        conversation_room_id: Number(roomId),
        conversation_user_id: Number(chatUserId),
        team_id: Number(channel),
      });
    } else if (keywordFlag === 2) {
      localStorage.setItem('selectKey', 'false');
    }
  }, [keywordFlag]);

  return (
    <>
      <ExitConfirmModal modalActions={exitConfirmModal} />
      <t.Container>
        <NavBar
          isCenter={true}
          title="대화방"
          isNav={true}
          handleNav={exitConfirmModal.open}
        />
        <p className="guide_text">
          대화 주제 <strong>3가지</strong>를 골라주세요.
        </p>
        <div className="card_wrapper">
          {KEYWORD_LIST.map(item => (
            <KeywordList
              key={item.id}
              keyword={item.keyword}
              lineColor={item.color[0]}
              fillColor={item.color[1]}
              selected={selectedKeywords.includes(item.keyword) && true}
              onClick={() => handleSelectKeyword(item.keyword)}
            />
          ))}
        </div>
        <BottomButtonTab>
          <Button
            category="confirm"
            text="키워드 선택하기"
            disabled={!canSubmit}
            onClick={handleSubmitKeyword}
          />
        </BottomButtonTab>
      </t.Container>
    </>
  );
}
