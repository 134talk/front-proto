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
  conversation_room_id: number;
  conversation_user_id: number;
  question_code_list: number[];
};

export default function useSelection(
  conversation_room_id?: number,
  conversation_user_id?: number
) {
  const navigate = useNavigate();
  const { data } = useQuery<AxiosResponse<Res>, AxiosError>(
    [queryKeys.SELECTION],
    () => getSelections(conversation_room_id, conversation_user_id),
    {
      onSuccess: res => {
        if (res?.data.flag === 'keyword') {
          navigate(
            `/chat-keyword/${conversation_room_id}/${conversation_user_id}`
          );
        } else if (res?.data.flag === 'active') {
          navigate(`/chat/${conversation_room_id}/${conversation_user_id}/0`);
        } else return res;
      },
    }
  );
  const questionList = useMemo(() => data?.data.questions || [], [data]);

  const { mutate } = useMutation<AxiosResponse, AxiosError, Req>(
    ({ question_code_list }) =>
      postSelections(
        conversation_room_id,
        conversation_user_id,
        question_code_list
      ),
    {
      onSuccess: () =>
        navigate(`chat/${conversation_room_id}/${conversation_user_id}/0`),
    }
  );

  return { questionList, mutate };
}
