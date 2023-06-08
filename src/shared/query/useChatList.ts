import type { AxiosError, AxiosResponse } from 'axios';
import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { getChatList, searchChatList } from 'shared/api/chatApi';
import queryKeys from 'shared/constants/queryKeys';

type Res = {
  roomId: number;
  roomName: string;
  userCount: number;
  emotions: { emotionCode: string; emotionCount: number }[] | [];
  joinFlag: boolean;
}[];

export default function useChatList(name?: string) {
  const { data, refetch } = useQuery<AxiosResponse<Res>, AxiosError>(
    [queryKeys.CHATS],
    name.length > 0 ? () => searchChatList(name) : getChatList,
    {
      refetchOnWindowFocus: false,
    }
  );
  const chatList = useMemo(() => data?.data, [data]);

  return { chatList, refetch };
}
