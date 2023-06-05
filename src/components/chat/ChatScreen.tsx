import { BottomButtonTab, Card, EmotionModal, NavBar } from 'components';
import { useState } from 'react';
import { EMOTION_LIST } from 'shared/constants/constants';
import { styled } from 'styled-components';
import { Button, Emotion } from 'ui';

export default function ChatScreen() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [sendEmotion, setSendEmotion] = useState<string>('');
  const [isSendEmotion, setIsSendEmotion] = useState<boolean>(false);
  const [isRotate, setIsRotate] = useState<boolean>(false);

  const handleRotate = () => {
    setIsRotate(!isRotate);
  };
  return (
    <>
      <EmotionModal
        sendEmotion={sendEmotion}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setIsSendEmotion={setIsSendEmotion}
      />
      <Container>
        <NavBar isCenter={true} title="대화방" />
        <div className="card_wrapper">
          <Card
            size="15.188rem"
            keyword="일상"
            hint="모든 중요한 것은 일상 속에 있다."
            question="당신에게 소소한 행복은 어떤 것들인가요?"
            isFront={isRotate}
            type="chat"
            fillColor="#D4D1FF"
            lightColor="#DF9EEC"
            darkColor="#D299FF"
            onClick={handleRotate}
          />
        </div>
        <p className="card_info_text">'들썩이는 매의 일격'님이 선택한 질문</p>
        <div className="emotion_wrapper">
          {EMOTION_LIST.map(item => (
            <Emotion
              image={item.source}
              key={item.id}
              isEmotion={
                isSendEmotion && sendEmotion.includes(item.emotion) && true
              }
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
    &.card_wrapper {
      display: flex;
      margin-top: 4.75rem;
      margin-bottom: 1.5rem;
    }
    &.emotion_wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      row-gap: 0.5rem;
      width: 14rem;
      margin-top: 2.625rem;
    }
    &.temp {
      background-color: skyblue;
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
    }
  }
  p {
    &.card_info_text {
      color: #475467;
      font-size: 0.875rem;
      text-align: center;
    }
  }
`;
