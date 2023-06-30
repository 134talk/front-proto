import type { AxiosError, AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import { postFeedOption } from 'shared/api/reportApi';

export type Feedback = {
  toUserId: number;
  review: string | '';
  feedbackScore: number | null;
};
type Req = {
  roomId: number;
  sentence: string | '';
  score: number;
  feedback: Feedback[];
};

export default function useFeedOption() {
  const { mutate } = useMutation<AxiosResponse, AxiosError, Req>(
    ({ roomId, sentence, score, feedback }) =>
      postFeedOption(roomId, sentence, score, feedback)
  );
  return { mutate };
}
