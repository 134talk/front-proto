import { BottomButtonTab, StatusSlider } from 'components';
import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FEED_QUESTION_LIST, FEED_STATUS } from 'shared/constants/constants';
import useFeedRequirement from 'shared/query/useFeedRequirement';
import { Button } from 'ui';
import type { FeedRequirementData } from './FeedReminderModal';
import * as t from './statusReminder.style';

type StatusReminderProps = {
  feedRequirementData: FeedRequirementData;
};

export default function StatusReminder({
  feedRequirementData,
}: StatusReminderProps) {
  const { type, roomId } = useParams();
  const navigate = useNavigate();
  const [value, setValue] = useState<number>(0);
  const [internalValues, setInternalValues] = useState({
    energy: 0,
    relation: 0,
    stable: 0,
    stress: 0,
  });
  console.log('internalValues: ', internalValues);

  useEffect(() => {
    if (feedRequirementData) {
      setInternalValues({
        energy: feedRequirementData?.statusEnergy || 0,
        relation: feedRequirementData?.statusRelation || 0,
        stable: feedRequirementData?.statusStable || 0,
        stress: feedRequirementData?.statusStress || 0,
      });
    }
  }, [feedRequirementData]);

  useEffect(() => {
    const statusType = FEED_STATUS[type as keyof typeof FEED_STATUS];
    if (statusType) {
      setValue(internalValues[statusType as keyof typeof internalValues]);
    }
  }, [type, feedRequirementData, internalValues]);

  const handleValueChange = (newValue: number) => {
    setValue(newValue);
    const statusType = FEED_STATUS[type as keyof typeof FEED_STATUS];
    if (statusType) {
      setInternalValues(prev => ({ ...prev, [statusType]: newValue }));
    }
  };

  const { mutate } = useFeedRequirement();
  const handleNext = () => {
    switch (type) {
      case '6':
        mutate({
          roomId: Number(roomId),
          statusEnergy: Number(internalValues.energy),
          statusRelation: Number(internalValues.relation),
          statusStress: Number(internalValues.stress),
          statusStable: Number(internalValues.stable),
        });
        break;
      default:
        navigate(`/feedback/${Number(type) + 1}/${roomId}`);
        break;
    }
  };

  const currentQuestion = FEED_QUESTION_LIST.find(
    item => item.id === Number(type)
  );

  const plusTimeoutRef = useRef<number | null>(null);
  const minusTimeoutRef = useRef<number | null>(null);
  const handleRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleValueChange(Number(e.target.value));
  };
  const handlePlusValue = () => {
    setValue(prevValue => {
      let newValue = prevValue;
      if (prevValue < 100) {
        newValue = prevValue + 1;
      }
      handleValueChange(newValue);
      return newValue;
    });
    plusTimeoutRef.current = window.setTimeout(() => {
      handlePlusValue();
    }, 200);
  };
  const handleMinusValue = () => {
    setValue(prevValue => {
      let newValue = prevValue;
      if (prevValue > -100) {
        newValue = prevValue - 1;
      }
      handleValueChange(newValue);
      return newValue;
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
