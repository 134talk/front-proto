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
  roomId: number;
  chatUserId: number;
  keyword_code: string[];
};

export default function useKeyword(roomId?: number, chatUserId?: number) {
  const navigate = useNavigate();
  const { data } = useQuery<AxiosResponse<Res>, AxiosError>(
    [queryKeys.KEYWORD_FLAG],
    () => getKeywordsFlag(roomId, chatUserId)
  );
  const keywordFlag = useMemo(
    () => data?.data.keyword_selection || null,
    [data]
  );

  const { mutate: postMutate } = useMutation<AxiosResponse, AxiosError, Req>(
    ({ keyword_code }) => postKeywords(roomId, chatUserId, keyword_code),
    {
      onSuccess: () => navigate(`chat-selection/${roomId}/${chatUserId}`),
    }
  );

  const { mutate: putMutate } = useMutation<AxiosResponse, AxiosError, Req>(
    ({ keyword_code }) => putKeywords(roomId, chatUserId, keyword_code),
    {
      onSuccess: () => navigate(`chat-selection/${roomId}/${chatUserId}`),
    }
  );

  return { keywordFlag, postMutate, putMutate };
}
