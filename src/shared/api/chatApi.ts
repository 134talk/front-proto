import axiosInstance from './instance';

export const getTeam = (tId: string) =>
  axiosInstance.get(`/teams/${tId}/users`);

export const getChatList = () => axiosInstance.get('/conversation-rooms');

export const searchChatList = (searchName: string) =>
  axiosInstance.get(`/chat/find-chatrooms-with-name?searchName=${searchName}`);

export const createRoom = (userIdList: number[]) =>
  axiosInstance.post('/chat/create-chatroom', userIdList);

export const getTimer = (tId: string) => axiosInstance.get(`/teams/${tId}`);

export const setTimer = (tId: string, chatTime: string) =>
  axiosInstance.put(`/teams/${tId}`, {
    timeout: chatTime,
  });
