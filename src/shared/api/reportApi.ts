import axiosInstance from './instance';

export const getFeedUser = (roomId: string) =>
  axiosInstance.get(`/chat/find-users/chatroom/${roomId}`);

export const postFeedOption = (
  roomId: string,
  sentence: string,
  score: number,
  feedback: [{ toUserId: number; review: string; feedbackScore: number }]
) =>
  axiosInstance.post('/chat/create/feedback/optional', {
    roomId,
    sentence,
    score,
    feedback,
  });

export const getFeedRequirement = () =>
  axiosInstance.get('/chat/find/feedback');

export const postFeedRequirement = (
  roomId: string,
  statusEnergy: number,
  statusRelation: number,
  statusStress: number,
  statusStable: number
) =>
  axiosInstance.post('/chat/create/feedback', {
    roomId,
    statusEnergy,
    statusRelation,
    statusStress,
    statusStable,
  });

// 리포트 상세 조회
// 유저 대화 목록 조회
// 유저 대화 상세 조회
export const test = () => {};
