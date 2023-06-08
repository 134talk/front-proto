import type { AxiosError, AxiosResponse } from 'axios';
import { useMemo } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { createRoom, getChatList } from 'shared/api/chatApi';
import queryKeys from 'shared/constants/queryKeys';

type Req = {
  userList: number[];
};

type Res = {
  roomId: number;
  roomName: string;
  userCount: number;
  emotions: { emotionCode: string; emotionCount: number }[] | [];
  joinFlag: boolean;
}[];

export default function useChatList(name?: string) {
  const queryClient = useQueryClient();
  const { data } = useQuery<AxiosResponse<Res>, AxiosError>(
    [queryKeys.CHATS],
    getChatList
  );

  // const { data: searchData } = useQuery<AxiosResponse<Res>, AxiosError>(
  //   [queryKeys.CHATS],
  //   () => searchChatList(name),
  //   {
  //     onSuccess: res => console.log(res),
  //   }
  // );

  const chatList = useMemo(() => data?.data, [data]);

  const { mutate } = useMutation<AxiosResponse, AxiosError, Req>(
    ({ userList }) => createRoom(userList),
    {
      onSuccess: res => queryClient.invalidateQueries([queryKeys.CHATS]),
    }
  );
  return { chatList, mutate };
}
