import type { AxiosError, AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import { postFeedOption } from 'shared/api/reportApi';

type Req = {
  roomId: string;
  sentence: string;
  score: number;
  feedback: [{ toUserId: number; review: string; feedbackScore: number }];
};

export default function useFeedOption() {
  const { mutate } = useMutation<AxiosResponse, AxiosError, Req>(
    ({ roomId, sentence, score, feedback }) =>
      postFeedOption(roomId, sentence, score, feedback)
  );
  return { mutate };
}
