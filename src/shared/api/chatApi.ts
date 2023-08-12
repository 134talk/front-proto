import axiosInstance from './instance';

export const getTeam = (tId: string) =>
  axiosInstance.get(`/teams/${tId}/users`);

export const getChatList = (tId: string) =>
  axiosInstance.get(`/teams/${tId}/conversation-rooms`);

export const searchChatList = (tId: string, searchKeyword: string) =>
  axiosInstance.get(
    `/teams/${tId}/conversation-rooms/search?name=${searchKeyword}`
  );

export const createRoom = (tId: string, userList: number[]) =>
  axiosInstance.post(`teams/${tId}/conversation-room`, {
    user_array: userList,
  });

export const getTimer = (tId: string) => axiosInstance.get(`/teams/${tId}`);

export const setTimer = (tId: string, chatTime: string) =>
  axiosInstance.put(`/teams/${tId}`, {
    timeout: chatTime,
  });

export const updateGuideStatus = (uId: string) =>
  axiosInstance.post(`/users/${uId}/notify`);

export const setChatFlag = (
  conversation_room_id: number,
  conversation_user_id: number,
  team_id: number
) =>
  axiosInstance.put(
    `/conversation-rooms/${conversation_room_id}/conversation-users/${conversation_user_id}`,
    { team_id }
  );

export const getKeywordsFlag = (
  conversation_room_id: number,
  conversation_user_id: number
) =>
  axiosInstance.get(
    `/conversation-rooms/${conversation_room_id}/conversation-users/${conversation_user_id}/keywords`
  );

export const postKeywords = (
  conversation_room_id: number,
  conversation_user_id: number,
  keywordCode: string[]
) =>
  axiosInstance.post(
    `/conversation-rooms/${conversation_room_id}/conversation-users/${conversation_user_id}/keywords`,
    { keywordCode }
  );

export const putKeywords = (
  conversation_room_id: number,
  conversation_user_id: number,
  keyword_code: string[]
) =>
  axiosInstance.put(
    `/conversation-rooms/${conversation_room_id}/conversation-users/${conversation_user_id}/keywords`,
    { keyword_code }
  );

export const getSelections = (
  conversation_room_id: number,
  conversation_user_id: number
) =>
  axiosInstance.get(
    `/conversation-rooms/${conversation_room_id}/conversation-users/${conversation_user_id}/keywords/questions`
  );

export const postSelections = (
  conversation_room_id: number,
  conversation_user_id: number,
  question_code_list: number[]
) =>
  axiosInstance.post(
    `/conversation-rooms/${conversation_room_id}/conversation-users/${conversation_user_id}/keywords/questions`,
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
