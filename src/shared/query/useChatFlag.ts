import type { AxiosError, AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { setChatFlag } from 'shared/api/chatApi';

export type Res = {
  data: {
    check_flag: 'keyword' | 'question' | 'active';
    conversation_room_id: number;
    conversation_user_id: number;
  };
};
type Req = {
  conversation_room_id: number;
  conversation_user_id: number;
  team_id: number;
};

export default function useChatFlag() {
  const navigate = useNavigate();
  const { mutate } = useMutation<AxiosResponse<Res>, AxiosError, Req>(
    ({ conversation_room_id, conversation_user_id, team_id }) =>
      setChatFlag(conversation_room_id, conversation_user_id, team_id),
    {
      onSuccess: res => {
        const roomId = res?.data.data.conversation_room_id;
        const chatUserId = res?.data.data.conversation_user_id;
        if (res?.data.data.check_flag === 'keyword') {
          navigate(`/chat-keyword/${roomId}/${chatUserId}`);
        } else if (res?.data.data.check_flag === 'question') {
          navigate(`/chat-selection/${roomId}/${chatUserId}`);
        } else if (res?.data.data.check_flag === 'active') {
          navigate(`/chat/${roomId}/${chatUserId}/0`);
        } else return navigate('/chats');
      },
    }
  );

  return { mutate };
}
