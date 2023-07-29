import type { AxiosError, AxiosResponse } from 'axios';
import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import { getFlag } from 'shared/api/chatApi';
import queryKeys from 'shared/constants/queryKeys';

export type Res = {
  flag: 'keyword' | 'question' | 'active';
};

export default function useChatFlag(roomId: number, chatUserId: number) {
  const navigate = useNavigate();
  const location = useLocation();
  const { data, refetch } = useQuery<AxiosResponse<Res>, AxiosError>(
    [queryKeys.CHAT_FLAG],
    () => getFlag(roomId, chatUserId),
    {
      onSuccess: res => {
        if (
          res?.data.flag === 'keyword' &&
          location.pathname !== `/chat-keyword/${roomId}/${chatUserId}`
        ) {
          navigate(`/chat-keyword/${roomId}/${chatUserId}`);
        } else if (
          res?.data.flag === 'question' &&
          location.pathname !== `/chat-selection/${roomId}/${chatUserId}`
        ) {
          navigate(`/chat-selection/${roomId}/${chatUserId}`);
        } else if (
          res?.data.flag === 'active' &&
          location.pathname !== `/chat/${roomId}/${chatUserId}/0`
        ) {
          navigate(`/chat/${roomId}/${chatUserId}/0`);
        } else return navigate('/chats');
      },
    }
  );

  const chatFlag = useMemo(() => data?.data.flag || null, [data]);

  return { chatFlag, refetch };
}
