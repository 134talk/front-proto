import type { AxiosError, AxiosResponse } from 'axios';
import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import { getFlag } from 'shared/api/chatApi';
import queryKeys from 'shared/constants/queryKeys';

export type Res = {
  flag: 'keyword' | 'question' | 'active';
};

export default function useChatFlag(
  conversation_room_id: number,
  conversation_user_id: number
) {
  const navigate = useNavigate();
  const location = useLocation();
  const { data, refetch } = useQuery<AxiosResponse<Res>, AxiosError>(
    [queryKeys.CHAT_FLAG],
    () => getFlag(conversation_room_id, conversation_user_id),
    {
      enabled: !!roomId,
      onSuccess: res => {
        if (
          res?.data.flag === 'keyword' &&
          location.pathname !==
            `/chat-keyword/${conversation_room_id}/${conversation_user_id}`
        ) {
          navigate(
            `/chat-keyword/${conversation_room_id}/${conversation_user_id}`
          );
        } else if (
          res?.data.flag === 'question' &&
          location.pathname !==
            `/chat-selection/${conversation_room_id}/${conversation_user_id}`
        ) {
          navigate(
            `/chat-selection/${conversation_room_id}/${conversation_user_id}`
          );
        } else if (
          res?.data.flag === 'active' &&
          location.pathname !==
            `/chat/${conversation_room_id}/${conversation_user_id}/0`
        ) {
          navigate(`/chat/${conversation_room_id}/${conversation_user_id}/0`);
        } else return navigate('/chats');
      },
    }
  );

  const chatFlag = useMemo(() => data?.data.flag || null, [data]);

  return { chatFlag, refetch };
}
