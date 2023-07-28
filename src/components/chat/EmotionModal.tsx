import { BottomModal } from 'components';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CHECK_ICON, CLOSE_BLACK } from 'shared/constants/icons';
import type { ModalActions } from 'shared/hooks/useModal';
import useUserData from 'shared/hooks/useUserData';
import { useAppDispatch, useAppSelector } from 'shared/store/store';
import { Button, ProfileImg } from 'ui';
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
  const { uId } = useUserData();
  const { roomId } = useParams();
  const subUserList = useAppSelector(state => state.chat?.subNotice?.userList);
  const chatUserList = subUserList?.filter(el => el.userId !== Number(uId));
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
        destination: '/pub/room/emoticon',
        data: {
          roomId: Number(roomId),
          userId: Number(uId),
          toUserId: sendTo.userId,
          emoticonCode: sendEmotion.id,
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
                <p className="guIde_text">어느 분에게 감정을 표현하시겠어요?</p>
                <img src={CLOSE_BLACK} alt="close" onClick={handleClose} />
              </div>
              {sendTo && <p className="sub_text">'{sendTo.nickname}'님에게</p>}
            </div>
            <div className="user_list_wrapper">
              {chatUserList?.map(item => (
                <div className="user_wrapper" key={item.userId}>
                  <ProfileImg
                    size="3rem"
                    image={item.profileUrl}
                    onClick={() => handleSelect(item.nickname, item.userId)}
                  />
                  {sendTo && sendTo.nickname.includes(item.nickname) && (
                    <img className="check_image" src={CHECK_ICON} alt="check" />
                  )}
                </div>
              ))}
            </div>
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
