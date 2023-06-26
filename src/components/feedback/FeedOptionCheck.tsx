import { BottomButtonTab, StatusSlider } from 'components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'ui';
import * as t from './feedOptionCheck.style';

export default function FeedOptionCheck() {
  const [value, setValue] = useState<number>(5);
  const navigate = useNavigate();
  const handleRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };
  const handleNext = () => {
    navigate('/feedback/2');
  };
  return (
    <t.Container>
      <div className="title_wrapper">
        <p className="title_text">대화가 마무리 되었습니다.</p>
        <p className="sub_text">
          대화 만족도는 어떤지 체크해주세요.<span>*</span>
        </p>
      </div>
      <div className="check_wrapper">
        <StatusSlider
          minValue={0}
          maxValue={10}
          isRow={true}
          value={value}
          onChange={handleRange}
        />
        <div className="range_wrapper">
          <p>1</p>
          <p>10</p>
        </div>
        <div className="score_wrapper">
          <p>대화 만족도</p>
          <p>{value}점</p>
        </div>
      </div>
      <p className="sentence_text">
        이번 대화방에서 나에게 <br /> 남은 문장이 있다면 어떤 문장일까요?
      </p>
      <textarea placeholder="기억에 남는 문장 또는 오늘의 대화를 요약할 수 있는 문장이 있다면 자유롭게 남겨주세요!" />
      <BottomButtonTab>
        <Button category="confirm" text="다음" onClick={handleNext} />
      </BottomButtonTab>
    </t.Container>
  );
}
