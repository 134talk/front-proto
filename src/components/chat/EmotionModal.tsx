import { BottomModal, ChatUser } from 'components';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CLOSE_BLACK } from 'shared/constants/icons';
import type { ModalActions } from 'shared/hooks/useModal';
import { useAppDispatch } from 'shared/store/store';
import { Button } from 'ui';
import * as t from './emotionModal.style';

interface EmotionModalProps {
  sendEmotion: { emotion: string; id: number };
  modalActions: ModalActions;
}

export default function EmotionModal({
  sendEmotion,
  modalActions,
}: EmotionModalProps) {
  const dispatch = useAppDispatch();
  const { roomId, chatUserId } = useParams();
  const [sendTo, setSendTo] = useState<{
    nickname: string;
    userId: number;
  } | null>(null);
  const handleSelect = (nickname: string, userId: number) => {
    setSendTo({ nickname, userId });
  };
  const handleClose = () => {
    setSendTo(null);
    modalActions.close();
  };
  const handleSendEmotion = () => {
    dispatch({
      type: 'sendData',
      payload: {
        destination: 'sendEmotion',
        data: {
          conversation_room_id: Number(roomId),
          conversation_user_id: Number(chatUserId),
          receive_user_id: sendTo.userId,
          emotion_code: sendEmotion.id,
        },
      },
    });
    setSendTo(null);
    modalActions.close();
  };

  return (
    <>
      {modalActions.isOpen && (
        <BottomModal isOpen={modalActions.isOpen}>
          <t.Container>
            <div className="navbar_wrapper">
              <div className="navbar_top_wrapper">
                <p className="guide_text">어느 분에게 감정을 표현하시겠어요?</p>
                <img src={CLOSE_BLACK} alt="close" onClick={handleClose} />
              </div>
              {sendTo && <p className="sub_text">'{sendTo.nickname}'님에게</p>}
            </div>
            <ChatUser onClick={handleSelect} sendTo={sendTo} />
            <div className="button_wrapper">
              <Button
                category="confirm"
                disabled={!sendTo ? true : false}
                text={sendEmotion.emotion}
                onClick={handleSendEmotion}
              />
              <Button category="cancel" text="취소" onClick={handleClose} />
            </div>
          </t.Container>
        </BottomModal>
      )}
    </>
  );
}
