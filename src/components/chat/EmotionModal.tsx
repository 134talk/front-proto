import { BottomModal } from 'components';
import type { BottomModalProps } from 'components/common/BottomModal';
import { useState } from 'react';
import { CHECK_ICON, CLOSE_BLACK } from 'shared/constants/icons';
import { styled } from 'styled-components';
import { Button, ProfileImg } from 'ui';

interface EmotionModalProps extends BottomModalProps {
  sendEmotion: string;
}

export const User = [
  { id: 1, nickname: '들썩이는 매의 일격', name: '이담' },
  { id: 2, nickname: '들썩이는 나무의 일격', name: '이담' },
  { id: 3, nickname: '들썩이는 바위의 일격', name: '이담' },
  { id: 4, nickname: '들썩이는 바람의 일격', name: '이담' },
  { id: 5, nickname: '들썩이는 황소의 일격', name: '이담' },
];

export default function EmotionModal({
  isOpen,
  toggleModal,
  sendEmotion,
}: EmotionModalProps) {
  const [sendTo, setSendTo] = useState<string>();
  const handleSelect = (nickname: string) => {
    setSendTo(nickname);
  };

  return (
    <>
      {isOpen && (
        <BottomModal toggleModal={() => toggleModal()} isOpen={isOpen}>
          <Container>
            <div className="navbar_wrapper">
              <div className="navbar_top_wrapper">
                <p className="guide_text">어느 분에게 감정을 표현하시겠어요?</p>
                <img
                  src={CLOSE_BLACK}
                  alt="close"
                  onClick={() => toggleModal()}
                />
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
                text={`'${sendEmotion}'을 보낼래요`}
              />
              <Button
                category="cancel"
                text="취소"
                onClick={() => toggleModal()}
              />
            </div>
          </Container>
        </BottomModal>
      )}
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 22.313rem;
  padding: 1.5rem;
  div {
    &.navbar_wrapper {
      display: flex;
      flex-direction: column;
      gap: 0.625rem;
      margin-bottom: 1.75rem;
      height: 3.376rem;
    }
    &.navbar_top_wrapper {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    &.user_list_wrapper {
      display: flex;
      justify-content: center;
      gap: 1rem;
      width: 20rem;
      height: 4rem;
      margin-bottom: 2rem;
    }
    &.user_wrapper {
      display: flex;
      flex-direction: column;
    }
    &.button_wrapper {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
  p {
    &.guide_text {
      text-align: center;
      width: 100%;
      font-size: 1.125rem;
      font-weight: bold;
    }
    &.sub_text {
      text-align: center;
      width: 100%;
      font-size: 1rem;
    }
  }
  img {
    &.check_image {
      width: 1.125rem;
      height: 1.125rem;
      position: relative;
      margin: -50px 0 0 35px;
      cursor: pointer;
    }
  }
`;
