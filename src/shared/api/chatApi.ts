import axiosInstance from './instance';

export const getTeam = () => axiosInstance.get('/user/teammate');

export const getChatList = () => axiosInstance.get('/chat/find-chatrooms');

export const searchChatList = (searchName: string) =>
  axiosInstance.get(`/chat/find-chatrooms-with-name?searchName=${searchName}`);

export const createRoom = (userIdList: number[]) =>
  axiosInstance.post('/chat/create-chatroom', userIdList);

export const getTimer = () => axiosInstance.get('/user/get-timeout');

export const setTimer = (timeout: string) =>
  axiosInstance.put(`/user/update-timeout/${timeout}`);

export const getFlag = (
  conversation_room_id: number,
  conversation_user_id: number
) =>
  axiosInstance.get(
    `/conversation-rooms/${conversation_room_id}/users/${conversation_user_id}`
  );

export const getKeywordsFlag = (
  conversation_room_id: number,
  conversation_user_id: number
) =>
  axiosInstance.get(
    `/conversation-rooms/${conversation_room_id}/users/${conversation_user_id}/keywords`
  );

export const postKeywords = (
  conversation_room_id: number,
  conversation_user_id: number,
  keywordCode: string[]
) =>
  axiosInstance.post(
    `/conversation-rooms/${conversation_room_id}/users/${conversation_user_id}/keywords`,
    { keywordCode }
  );

export const putKeywords = (
  conversation_room_id: number,
  conversation_user_id: number,
  keyword_code: string[]
) =>
  axiosInstance.put(
    `/conversation-rooms/${conversation_room_id}/users/${conversation_user_id}/keywords`,
    { keyword_code }
  );

export const getSelections = (
  conversation_room_id: number,
  conversation_user_id: number
) =>
  axiosInstance.get(
    `/conversation-rooms/${conversation_room_id}/users/${conversation_user_id}/keywords/questions`
  );

export const postSelections = (
  conversation_room_id: number,
  conversation_user_id: number,
  question_code_list: number[]
) =>
  axiosInstance.post(
    `/conversation-rooms/${conversation_room_id}/users/${conversation_user_id}/keywords/questions`,
    {
      question_code_list,
    }
  );

export const postExitChatRoom = (
  conversation_room_id: number,
  conversation_user_id: number
) =>
  axiosInstance.post(
    `/conversation-rooms/${conversation_room_id}/conversation-users/${conversation_user_id}/cancel`
  );
