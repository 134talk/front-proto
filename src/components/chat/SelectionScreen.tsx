import { NavBar } from 'components';
import { useState } from 'react';
import { CHAT_LEFT_ARROW, CHAT_RIGHT_ARROW } from 'shared/constants/icons';
import { Button } from 'ui';
import * as t from './selectionScreen.style';

const List = [
  { main: '키워드1', sub: '키워드1-1' },
  { main: '키워드2', sub: '키워드2-1' },
  { main: '키워드3', sub: '키워드3-1' },
];

export default function SelectionScreen() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFront, setIsFront] = useState<boolean>(false);
  const [orderList, setOrderList] = useState([]);
  const handleNext = () => {
    if (isFront) setIsFront(false);
    setCurrentIndex(prevIndex => (prevIndex + 1) % List.length);
  };

  const handlePrevious = () => {
    if (isFront) setIsFront(false);
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? List.length - 1 : prevIndex - 1
    );
  };

  const handleRotate = () => {
    setIsFront(!isFront);
  };

  const handleBack = () => {};
  const handleSelectOrder = () => {
    if (!orderList.includes(List[currentIndex].main)) {
      setOrderList([...orderList, List[currentIndex].main]);
    } // 같은 질문 선택시 알림 처리 필요 또는 선택된 질문은 리스트에서 지워서 보여지지 않도록 처리
  };

  return (
    <t.Container>
      <NavBar isCenter={true} title="대화방" />
      <p className="nav_guide_text">먼저 답하고 싶은 질문을 선택해주세요.</p>
      <div className="card_wrapper">
        <img src={CHAT_LEFT_ARROW} alt="left-arrow" onClick={handlePrevious} />
        <p onClick={handleRotate}>
          {isFront ? List[currentIndex].sub : List[currentIndex].main}
        </p>
        <img src={CHAT_RIGHT_ARROW} alt="right-arrow" onClick={handleNext} />
      </div>
      <div className="button_wrapper">
        {orderList.length > 2 ? (
          <p className="guide_text">
            잠시만 기다려주세요. <br />곧 대화가 시작됩니다.
          </p>
        ) : (
          <Button
            category="cancel"
            text="키워드 다시고르기 (1회)"
            onClick={handleBack}
          />
        )}
        <Button
          category="confirm"
          text="질문 선택하기"
          onClick={handleSelectOrder}
        />
      </div>
    </t.Container>
  );
}
