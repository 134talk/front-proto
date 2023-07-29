import type { AxiosError, AxiosResponse } from 'axios';
import { useMemo } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { getSelections, postSelections } from 'shared/api/chatApi';
import queryKeys from 'shared/constants/queryKeys';

type Question = {
  keyword_id: number;
  keyword_name: string;
  question_id: number;
  question_content: string;
  depth: number;
};
export type Res = {
  flag: 'keyword' | 'question' | 'active';
  questions: Question[];
};
export type Req = {
  roomId: number;
  chatUserId: number;
  question_code_list: number[];
};

export default function useSelection(roomId?: number, chatUserId?: number) {
  const navigate = useNavigate();
  const { data } = useQuery<AxiosResponse<Res>, AxiosError>(
    [queryKeys.SELECTION],
    () => getSelections(roomId, chatUserId),
    {
      onSuccess: res => {
        if (res?.data.flag === 'keyword') {
          navigate(`/chat-keyword/${roomId}/${chatUserId}`);
        } else if (res?.data.flag === 'active') {
          navigate(`/chat/${roomId}/${chatUserId}/0`);
        } else return res;
      },
    }
  );
  const questionList = useMemo(() => data?.data.questions || [], [data]);

  const { mutate } = useMutation<AxiosResponse, AxiosError, Req>(
    ({ question_code_list }) =>
      postSelections(roomId, chatUserId, question_code_list),
    {
      onSuccess: () => navigate(`chat/${roomId}/${chatUserId}/0`),
    }
  );

  return { questionList, mutate };
}
