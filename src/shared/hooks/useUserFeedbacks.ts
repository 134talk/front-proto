import { useState } from 'react';
import { FEED_OPTION_SELECT } from 'shared/constants/constants';

export type UpdatedFeedback = {
  review_user_id: number;
  review_content: string | '';
  selectedOption: number | null;
};

type HandleSelectFunction = (
  userId: number,
  field: keyof UpdatedFeedback,
  value: string | number
) => void;

type ResetFeedbacksFunction = (newFeedbacks: UpdatedFeedback[]) => void;

export default function useUserFeedbacks(initialFeedbacks: UpdatedFeedback[]): {
  userFeedbacks: UpdatedFeedback[];
  handleSelect: HandleSelectFunction;
  resetFeedbacks: ResetFeedbacksFunction;
} {
  const [userFeedbacks, setUserFeedbacks] =
    useState<UpdatedFeedback[]>(initialFeedbacks);

  const handleSelect: HandleSelectFunction = (userId, field, value) => {
    setUserFeedbacks(prev =>
      prev.map(item => {
        if (item.review_user_id === userId) {
          if (field === 'selectedOption') {
            const matchedFeedback = FEED_OPTION_SELECT.find(
              option => option.id === value
            );
            return {
              ...item,
              selectedOption: matchedFeedback?.id,
              review_content:
                matchedFeedback?.id === 6
                  ? ''
                  : matchedFeedback?.label || item.review_content,
            };
          } else if (field === 'review_content') {
            return {
              ...item,
              review_content: value as string,
            };
          }
        }
        return item;
      })
    );
  };

  const resetFeedbacks: ResetFeedbacksFunction = newFeedbacks => {
    setUserFeedbacks(newFeedbacks);
  };

  return { userFeedbacks, handleSelect, resetFeedbacks };
}
