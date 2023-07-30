import type { AxiosError, AxiosResponse } from 'axios';
import { useMemo } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { getKeywordsFlag, postKeywords, putKeywords } from 'shared/api/chatApi';
import queryKeys from 'shared/constants/queryKeys';

export type Res = {
  keyword_selection: number;
};
export type Req = {
  conversation_room_id: number;
  conversation_user_id: number;
  keyword_code: string[];
};

export default function useKeyword(
  conversation_room_id?: number,
  conversation_user_id?: number
) {
  const navigate = useNavigate();
  const { data } = useQuery<AxiosResponse<Res>, AxiosError>(
    [queryKeys.KEYWORD_FLAG],
    () => getKeywordsFlag(conversation_room_id, conversation_user_id)
  );
  const keywordFlag = useMemo(
    () => data?.data.keyword_selection || null,
    [data]
  );

  const { mutate: postMutate } = useMutation<AxiosResponse, AxiosError, Req>(
    ({ keyword_code }) =>
      postKeywords(conversation_room_id, conversation_user_id, keyword_code),
    {
      onSuccess: () =>
        navigate(
          `chat-selection/${conversation_room_id}/${conversation_user_id}`
        ),
    }
  );

  const { mutate: putMutate } = useMutation<AxiosResponse, AxiosError, Req>(
    ({ keyword_code }) =>
      putKeywords(conversation_room_id, conversation_user_id, keyword_code),
    {
      onSuccess: () =>
        navigate(
          `chat-selection/${conversation_room_id}/${conversation_user_id}`
        ),
    }
  );

  return { keywordFlag, postMutate, putMutate };
}
