import { BottomButtonTab, StatusSlider } from 'components';
import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FEED_QUESTION_LIST, FEED_STATUS } from 'shared/constants/constants';
import useUserData from 'shared/hooks/useUserData';
import useFeedRequirement from 'shared/query/useFeedRequirement';
import { Button } from 'ui';
import type { FeedRequirementData } from './FeedReminderModal';
import * as t from './statusReminder.style';

type StatusReminderProps = {
  feedRequirementData: FeedRequirementData;
  feedStatusId: number | null;
};

export default function StatusReminder({
  feedRequirementData,
  feedStatusId,
}: StatusReminderProps) {
  const { type, roomId, chatUserId } = useParams();
  const { feedbackKey } = useUserData();
  const navigate = useNavigate();
  const [value, setValue] = useState<number>(0);
  const [internalValues, setInternalValues] = useState({
    energy: 0,
    relation: 0,
    stable: 0,
    stress: 0,
  });

  const currentQuestion = FEED_QUESTION_LIST.find(
    item => item.id === Number(type)
  );

  useEffect(() => {
    if (feedRequirementData) {
      setInternalValues({
        energy: feedRequirementData?.status_energy || 0,
        relation: feedRequirementData?.status_relation || 0,
        stable: feedRequirementData?.status_stable || 0,
        stress: feedRequirementData?.status_stress || 0,
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

  const { putMutate, postMutate } = useFeedRequirement();
  const handleNext = () => {
    switch (type) {
      case '6':
        if (feedbackKey) {
          putMutate({
            status_id: feedStatusId,
            conversation_room_id: Number(roomId),
            conversation_user_id: Number(chatUserId),
            status_energy: Number(internalValues.energy),
            status_relation: Number(internalValues.relation),
            status_stable: Number(internalValues.stable),
            status_stress: Number(internalValues.stress),
          });
          localStorage.removeItem('feedbackKey');
        } else {
          postMutate({
            conversation_room_id: Number(roomId),
            conversation_user_id: Number(chatUserId),
            status_energy: Number(internalValues.energy),
            status_relation: Number(internalValues.relation),
            status_stable: Number(internalValues.stable),
            status_stress: Number(internalValues.stress),
          });
        }
        break;
      default:
        navigate(`/feedback/${Number(type) + 1}/${roomId}/${chatUserId}`);
        break;
    }
  };

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
