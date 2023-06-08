import axiosInstance from './instance';

export const getTeam = () => axiosInstance.get('/user/teammate');

export const getChatList = () => axiosInstance.get('/chat/find-chatrooms');

export const searchChatList = (name: string) =>
  axiosInstance.get(`/chat/find-chatrooms-with-name?name=${name}`);

export const createRoom = (userIdList: number[]) =>
  axiosInstance.post('/chat/create-chatroom', userIdList);

export const getTimer = () => axiosInstance.get('/user/get-timeout');

export const setTimer = (timeout: string) =>
  axiosInstance.put(`/user/update-timeout/${timeout}`);

// 키워드 선택
// 질문 순서 등록
