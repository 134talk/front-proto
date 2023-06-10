import type { AxiosError, AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { createRoom } from 'shared/api/chatApi';
import queryKeys from 'shared/constants/queryKeys';

type Req = {
  userList: number[];
};

export default function useChatInvitation() {
  const queryClient = useQueryClient();

  const { mutate } = useMutation<AxiosResponse, AxiosError, Req>(
    ({ userList }) => createRoom(userList),
    {
      onSuccess: res => queryClient.invalidateQueries([queryKeys.CHATS]),
    }
  );
  return { mutate };
}
