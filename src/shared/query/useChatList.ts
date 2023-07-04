import type { AxiosError, AxiosResponse } from 'axios';
import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { getChatList, searchChatList } from 'shared/api/chatApi';
import queryKeys from 'shared/constants/queryKeys';

type Res = {
  roomId: number;
  roomName: string;
  emoticons: { emoticon: string; emoticonCount: number }[] | [];
  joinFlag: boolean;
}[];

type Error = { errorCode: number };

export default function useChatList(keyword?: string) {
  const { data, refetch, error } = useQuery<
    AxiosResponse<Res>,
    AxiosError<Error>
  >(
    [queryKeys.CHATS],
    keyword.length > 0 ? () => searchChatList(keyword) : getChatList,
    {
      refetchOnWindowFocus: false,
      refetchInterval: 10000,
    }
  );
  const chatList = useMemo(() => data?.data, [data]);

  return { chatList, refetch, error };
}
