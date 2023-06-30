import { BottomButtonTab, StatusSlider } from 'components';
import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { FEED_QUESTION_LIST } from 'shared/constants/constants';
import useFeedRequirement from 'shared/query/useFeedRequirement';
import { Button } from 'ui';
import * as t from './statusReminder.style';

export default function StatusReminder() {
  const { type, roomId } = useParams();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    setSearchParams({
      energy: searchParams.get('energy') || '0',
      relation: searchParams.get('relation') || '0',
      stress: searchParams.get('stress') || '0',
      stable: searchParams.get('stable') || '0',
    });
  }, [searchParams, setSearchParams]);

  useEffect(() => {
    if (type === '3') {
      setSearchParams({ ...searchParams, energy: String(value) });
    } else if (type === '4') {
      setSearchParams({ ...searchParams, relation: String(value) });
    } else if (type === '5') {
      setSearchParams({ ...searchParams, stable: String(value) });
    } else if (type === '6') {
      setSearchParams({ ...searchParams, stress: String(value) });
    }
  }, [type, value, setSearchParams, searchParams]);

  const currentQuestion = FEED_QUESTION_LIST.find(
    item => item.id === Number(type)
  );

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

  const { mutate } = useFeedRequirement();
  const handleNext = () => {
    if (type === '6') {
      mutate({
        roomId: Number(roomId),
        statusEnergy: Number(searchParams.get('energy')),
        statusRelation: Number(searchParams.get('relation')),
        statusStress: Number(searchParams.get('stress')),
        statusStable: Number(searchParams.get('stable')),
      });
    } else {
      navigate(`/feedback/${Number(type) + 1}`);
    }
  };

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
