import type { AxiosError, AxiosResponse } from 'axios';
import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { getChatList, searchChatList } from 'shared/api/chatApi';
import queryKeys from 'shared/constants/queryKeys';
import useUserData from 'shared/hooks/useUserData';

type Res = {
  data: {
    conversation_room: {
      conversation_room_id: number;
      name: string;
      emotions: { emotion_name: string; emotion_count: number }[];
      conversation_user_id: number;
      join_flag: boolean;
      re_join_flag: boolean;
      user_info: string[];
      remained_feedback: number;
      conversation_flag: number;
    }[];
  };
};

type Error = { errorCode: number };

export default function useChatList(keyword?: string) {
  const { channel: tId } = useUserData();

  const { data, refetch, error } = useQuery<
    AxiosResponse<Res>,
    AxiosError<Error>
  >(
    [queryKeys.CHATS],
    keyword.length > 0
      ? () => searchChatList(tId, keyword)
      : () => getChatList(tId),
    {
      refetchOnWindowFocus: false,
      refetchInterval: 10000,
    }
  );

  const chatList = useMemo(() => data?.data.data.conversation_room, [data]);

  return { chatList, refetch, error };
}
