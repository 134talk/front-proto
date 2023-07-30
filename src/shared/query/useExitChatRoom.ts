import type { AxiosError, AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { postExitChatRoom } from 'shared/api/chatApi';

export type Req = {
  conversation_room_id: number;
  conversation_user_id: number;
};

export default function useExitChatRoom() {
  const navigate = useNavigate();
  const { mutate } = useMutation<AxiosResponse, AxiosError, Req>(
    ({ conversation_room_id, conversation_user_id }) =>
      postExitChatRoom(conversation_room_id, conversation_user_id),
    {
      onSuccess: () => navigate('/chats'),
    }
  );

  return { mutate };
}
