import { BottomButtonTab, Card, EmotionModal, NavBar } from 'components';
import { useState } from 'react';
import { EMOTION_LIST, KEYWORD_LIST } from 'shared/constants/constants';
import { Button, Emotion } from 'ui';
import * as t from './chatScreen.style';

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
      <t.Container>
        {/* change state (isNew) if user gets emotion,
        remove state (isNew) when user opened SideNavBar
        */}
        <NavBar
          title="대화방"
          isCenter={true}
          isHamburger={true}
          isNew={true}
        />
        <p>들썩이는 매의 일격(이담)님이 선택한 질문</p>
        <div className="card_wrapper">
          <Card
            keyword="일상"
            hint="모든 중요한 것은 일상 속에 있다."
            question="당신에게 소소한 행복은 어떤 것들인가요?"
            isFront={isRotate}
            lineColor={KEYWORD_LIST[0].color[0]}
            fillColor={
              isRotate ? KEYWORD_LIST[0].color[2] : KEYWORD_LIST[0].color[1]
            }
            onClick={handleRotate}
          />
        </div>
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
      </t.Container>
    </>
  );
}
