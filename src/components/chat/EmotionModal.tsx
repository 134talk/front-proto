import { BottomModal } from 'components';
import type { Dispatch, SetStateAction } from 'react';
import { useEffect, useState } from 'react';
import { CHECK_ICON, CLOSE_BLACK } from 'shared/constants/icons';
import { Button, ProfileImg } from 'ui';
import * as t from './emotionModal.style';

interface EmotionModalProps {
  isModalOpen: boolean;
  sendEmotion: string;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  setIsSendEmotion: Dispatch<SetStateAction<boolean>>;
}

export const User = [
  { id: 1, nickname: '들썩이는 매의 일격', name: '이담' },
  { id: 2, nickname: '들썩이는 나무의 일격', name: '이담' },
  { id: 3, nickname: '들썩이는 바위의 일격', name: '이담' },
  { id: 4, nickname: '들썩이는 바람의 일격', name: '이담' },
  { id: 5, nickname: '들썩이는 황소의 날개짓', name: '이담' },
];

export default function EmotionModal({
  isModalOpen,
  sendEmotion,
  setIsModalOpen,
  setIsSendEmotion,
}: EmotionModalProps) {
  const [sendTo, setSendTo] = useState<string>('');
  const handleSelect = (nickname: string) => {
    setSendTo(nickname);
  };
  const handleClose = () => {
    setSendTo('');
    setIsModalOpen(false);
  };
  const handleSendEmotion = () => {
    setSendTo('');
    setIsSendEmotion(true);
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      setIsSendEmotion(false);
    }
  }, [isModalOpen]);

  return (
    <>
      {isModalOpen && (
        <BottomModal isOpen={isModalOpen}>
          <t.Container>
            <div className="navbar_wrapper">
              <div className="navbar_top_wrapper">
                <p className="guide_text">어느 분에게 감정을 표현하시겠어요?</p>
                <img src={CLOSE_BLACK} alt="close" onClick={handleClose} />
              </div>
              {sendTo && <p className="sub_text">'{sendTo}'님에게</p>}
            </div>
            <div className="user_list_wrapper">
              {User.map(item => (
                <div className="user_wrapper" key={item.id}>
                  <ProfileImg
                    size="3rem"
                    onClick={() => handleSelect(item.nickname)}
                  />
                  {sendTo && sendTo.includes(item.nickname) && (
                    <img className="check_image" src={CHECK_ICON} alt="check" />
                  )}
                </div>
              ))}
            </div>
            <div className="button_wrapper">
              <Button
                category="confirm"
                disabled={!sendTo ? true : false}
                text={sendEmotion}
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
