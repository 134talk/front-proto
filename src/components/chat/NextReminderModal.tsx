import BaseModal from 'components/common/BaseModal';
import ChatUser from 'components/common/ChatUser';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'shared/store/store';
import { Button } from 'ui';
import * as t from './nextReminderModal.style';

interface NextReminderModalProps {
  onClose: () => void;
}

export default function NextReminderModal({ onClose }: NextReminderModalProps) {
  const { roomId, chatUserId } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [sendTo, setSendTo] = useState<{
    nickname: string;
    userId: number;
  } | null>(null);
  const endFlag = useAppSelector(
    state => state.chat?.recQuestion?.question_last_flag
  );
  const questionNumber = useAppSelector(
    state => state.chat?.recQuestion?.question_number
  );
  const handleSelect = (nickname: string, userId: number) => {
    setSendTo({ nickname, userId });
  };
  const handleNext = () => {
    localStorage.removeItem('isNextReminder');
    if (!endFlag) {
      dispatch({
        type: 'sendData',
        payload: {
          destination: 'sendNextQuestion',
          data: {
            conversation_room_id: Number(roomId),
            conversation_user_id: Number(chatUserId),
            question_number: questionNumber + 1,
          },
        },
      });
      onClose();
    } else {
      dispatch({
        type: 'sendData',
        payload: {
          destination: 'sendNextQuestion',
          data: {
            conversation_room_id: Number(roomId),
            conversation_user_id: Number(chatUserId),
            question_number: questionNumber + 1,
          },
        },
      });
      dispatch({ type: 'disconnect' });
      localStorage.removeItem('emotionKey');
      localStorage.removeItem('selectKey');
      navigate(`/feedback/1/${roomId}/${chatUserId}`);
      onClose();
    }
  };
  const handleReminder = () => {
    localStorage.setItem('isNextReminder', 'true');
    dispatch({
      type: 'sendData',
      payload: {
        destination: 'shareQuestion',
        data: {
          conversation_room_id: Number(roomId),
          conversation_user_id: Number(chatUserId),
          receive_user_id: sendTo.userId,
        },
      },
    });
    onClose();
  };
  return (
    <BaseModal>
      <t.Container>
        <div className="text_wrapper">
          <p className="main_text">
            이 주제에 대해 다른 참가자 분의 <br />
            이야기도 들어볼까요?
          </p>
          {sendTo && <p>{sendTo.nickname}</p>}
        </div>
        <ChatUser onClick={handleSelect} sendTo={sendTo} />
        <Button
          category="confirm"
          disabled={!sendTo ? true : false}
          text="질문하기"
          margin="1rem auto"
          width="90%"
          onClick={handleReminder}
        />
        <Button
          category="cancel"
          text={endFlag ? '대화 마무리하기' : '다음 질문으로 넘어가기'}
          margin="0 auto"
          width="90%"
          onClick={handleNext}
        />
      </t.Container>
    </BaseModal>
  );
}
