import type { AxiosError, AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { createRoom } from 'shared/api/chatApi';
import queryKeys from 'shared/constants/queryKeys';
import useUserData from 'shared/hooks/useUserData';

export default function useChatInvitation() {
  const queryClient = useQueryClient();
  const { channel: tId } = useUserData();

  const { mutate } = useMutation<AxiosResponse, AxiosError, number[]>(
    userList => createRoom(tId, userList),
    {
      onSuccess: _ => queryClient.invalidateQueries([queryKeys.CHATS]),
    }
  );
  return mutate;
}
