import { useState } from 'react';
import { FEED_OPTION_SELECT } from 'shared/constants/constants';
import type { Feedback } from 'shared/query/useFeedOption';

export type UpdatedFeedback = Feedback & {
  selectedOption: number | null;
  review: string;
};

type HandleSelectFunction = (
  userId: number,
  field: keyof UpdatedFeedback,
  value: string | number
) => void;

type ResetFeedbacksFunction = (newFeedbacks: UpdatedFeedback[]) => void;

export const useUserFeedbacks = (
  initialFeedbacks: UpdatedFeedback[]
): {
  userFeedbacks: UpdatedFeedback[];
  handleSelect: HandleSelectFunction;
  resetFeedbacks: ResetFeedbacksFunction;
} => {
  const [userFeedbacks, setUserFeedbacks] =
    useState<UpdatedFeedback[]>(initialFeedbacks);

  const handleSelect: HandleSelectFunction = (userId, field, value) => {
    setUserFeedbacks(prev =>
      prev.map(item => {
        if (item.toUserId === userId) {
          if (field === 'selectedOption') {
            const matchedFeedback = FEED_OPTION_SELECT.find(
              option => option.id === value
            );
            return {
              ...item,
              selectedOption: matchedFeedback?.id,
              review:
                matchedFeedback?.id === 6
                  ? ''
                  : matchedFeedback?.label || item.review,
            };
          } else if (field === 'review') {
            return {
              ...item,
              review: value as string,
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
};
