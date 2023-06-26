import { BottomButtonTab, StatusSlider } from 'components';
import { useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from 'ui';
import * as t from './statusReminder.style';

export default function StatusReminder() {
  const { type } = useParams();
  const navigate = useNavigate();
  const [value, setValue] = useState<number>(0);
  const plusTimeoutRef = useRef<number | null>(null);
  const minusTimeoutRef = useRef<number | null>(null);
  const handleRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };
  const handlePlusValue = () => {
    setValue(prev => {
      if (prev < 100) return prev + 1;
      return prev;
    });
    plusTimeoutRef.current = window.setTimeout(() => {
      handlePlusValue();
    }, 200);
  };
  const handleMinusValue = () => {
    setValue(prev => {
      if (prev > -100) return prev - 1;
      return prev;
    });
    minusTimeoutRef.current = window.setTimeout(() => {
      handleMinusValue();
    }, 200);
  };
  const handlePlusMouseDown = () => {
    handlePlusValue();
  };
  const handleMinusMouseDown = () => {
    handleMinusValue();
  };
  const handleMouseUp = () => {
    if (plusTimeoutRef.current) {
      window.clearTimeout(plusTimeoutRef.current);
      plusTimeoutRef.current = null;
    }
    if (minusTimeoutRef.current) {
      window.clearTimeout(minusTimeoutRef.current);
      minusTimeoutRef.current = null;
    }
  };
  const handleNext = () => {
    if (type === '6') return;
    navigate(`/feedback/${Number(type) + 1}`);
  };
  const FEED_QUESTION_LIST = [
    { id: 3, question: '오늘 나의 에너지레벨은 어떻게 변했나요?' },
    { id: 4, question: '오늘 다른 사람에 대해서 얼마나 더 이해하게 되었나요?' },
    { id: 5, question: '오늘 나의 심리적 안정감은 어떻게 변했나요?' },
    { id: 6, question: '오늘 스트레스 수치는 어떻게 변했나요?' },
  ];
  const currentQuestion = FEED_QUESTION_LIST.find(
    item => item.id === Number(type)
  );
  return (
    <t.Container>
      <div className="content_wrapper">
        <div className="text_wrapper">
          <p className="main_text">
            {currentQuestion && currentQuestion.question}
            <span>*</span>
          </p>
          <p className="sub_text">
            대화 후 나의 레벨을 <br />
            체크해주세요.
          </p>
          <p className="percent_text">
            {value}
            <span>%</span>
          </p>
        </div>
        <StatusSlider
          minValue={-100}
          maxValue={100}
          isRow={false}
          value={value}
          onChange={handleRange}
          handlePlusMouseDown={handlePlusMouseDown}
          handleMinusMouseDown={handleMinusMouseDown}
          handleMouseUp={handleMouseUp}
        />
      </div>
      <BottomButtonTab>
        <Button category="confirm" text="다음" onClick={handleNext} />
      </BottomButtonTab>
    </t.Container>
  );
}
