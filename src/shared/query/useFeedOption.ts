import type { AxiosError, AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import { postFeedOption } from 'shared/api/reportApi';

export type ReviewList = {
  review_user_id: number;
  review_content: string | '';
};
type Req = {
  conversation_room_id: number;
  conversation_user_id: number;
  feed_content: string | '';
  feed_score: number;
  review_list: ReviewList[];
};

export default function useFeedOption() {
  const { mutate } = useMutation<AxiosResponse, AxiosError, Req>(
    ({
      conversation_room_id,
      conversation_user_id,
      feed_content,
      feed_score,
      review_list,
    }) =>
      postFeedOption(
        conversation_room_id,
        conversation_user_id,
        feed_content,
        feed_score,
        review_list
      )
  );
  return { mutate };
}
