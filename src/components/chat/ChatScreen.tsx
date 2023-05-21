import { BottomButtonTab, NavBar } from 'components';
import { useState } from 'react';
import { VIOLET_IMAGE } from 'shared/constants/cards';
import { styled } from 'styled-components';
import { Button, ProfileImg } from 'ui';
import EmotionModal, { User } from './EmotionModal';

const List = [
  { id: 0, emotion: '응원해요' },
  { id: 1, emotion: '화나요' },
  { id: 2, emotion: '공감해요' },
  { id: 3, emotion: '즐거워요' },
  { id: 4, emotion: '행복해요' },
  { id: 5, emotion: '슬퍼요' },
];
export default function ChatScreen() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [sendEmotion, setSendEmotion] = useState<string>('');

  return (
    <>
      <EmotionModal
        isOpen={isModalOpen}
        toggleModal={() => setIsModalOpen(false)}
        sendEmotion={sendEmotion}
      />
      <Container>
        <NavBar isCenter={true} title="대화방" />
        <div className="user_wrapper">
          {User.map(item => (
            <ProfileImg size="3rem" key={item.id} />
          ))}
        </div>
        <div className="card_wrapper">
          <img className="card_image" src={VIOLET_IMAGE} alt="card-violet" />
        </div>
        <p className="card_info_text">'들썩이는 매의 일격'님이 선택한 질문</p>
        <button className="guide_button">💬 대화 가이드가 도착했습니다.</button>
        <div className="emotion_wrapper">
          {List.map(item => (
            <div
              className="temp"
              key={item.id}
              onClick={() => {
                setIsModalOpen(!isModalOpen);
                setSendEmotion(item.emotion);
              }}
            />
          ))}
        </div>
        <BottomButtonTab>
          <Button category="confirm" text="다음 질문으로 넘어가볼까요?" />
        </BottomButtonTab>
      </Container>
    </>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    &.user_wrapper {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-top: 1.25rem;
      gap: 0.5rem;
    }
    &.card_wrapper {
      display: flex;
      margin-top: 1.375rem;
      margin-bottom: 1.5rem;
    }
    &.emotion_wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      row-gap: 0.5rem;
      width: 14rem;
    }
    &.temp {
      background-color: skyblue;
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
    }
  }
  img {
    &.card_image {
      margin: 0 auto;
      width: 15.188rem;
      height: 15.188rem;
    }
  }
  p {
    &.card_info_text {
      color: #475467;
      font-size: 0.875rem;
      text-align: center;
    }
  }
  button {
    &.guide_button {
      width: 14.375rem;
      margin-top: 0.375rem;
      margin-bottom: 1.188rem;
      padding: 0.5rem 1.25rem;
      border-radius: 999px;
      box-shadow: 3px 4px 6px 0 rgba(138, 138, 138, 0.2);
      border: solid 1px #e9ecef;
      background-color: #fff;
    }
  }
`;
