import type { AxiosError, AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { createRoom } from 'shared/api/chatApi';
import queryKeys from 'shared/constants/queryKeys';

export default function useChatInvitation() {
  const queryClient = useQueryClient();

  const { mutate } = useMutation<AxiosResponse, AxiosError, number[]>(
    userList => createRoom(userList),
    {
      onSuccess: _ => queryClient.invalidateQueries([queryKeys.CHATS]),
    }
  );
  return mutate;
}
