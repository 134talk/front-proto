import type { Feedback } from 'shared/query/useFeedOption';
import axiosInstance from './instance';

export const getFeedUser = (roomId: number) =>
  axiosInstance.get(`/chat/find-users/chatroom/${roomId}`);

export const postFeedOption = (
  roomId: number,
  sentence: string,
  score: number,
  feedback: Feedback[]
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
  roomId: number,
  statusEnergy: number,
  statusRelation: number,
  statusStable: number,
  statusStress: number
) =>
  axiosInstance.post('/chat/create/feedback', {
    roomId,
    statusEnergy,
    statusRelation,
    statusStable,
    statusStress,
  });

export const getStatusReport = (tId: string) =>
  axiosInstance.get(`/statistics/teams/${tId}/character`);

export const getFeedbackReport = (tId: string) =>
  axiosInstance.get(`/statistics/teams/${tId}/feedback-log`);

export const getChatReport = (tId: string) =>
  axiosInstance.get(`/statistics/teams/${tId}/conversation-log`);

export const getUserReport = (uId: string) =>
  axiosInstance.get(`/statistics/users/${uId}/reports`);

export const getUserReportDetail = (uId: string, rId: string) =>
  axiosInstance.get(`/statistics/users/${uId}/reports/${rId}`);

export const getMemberReport = (tId: string) =>
  axiosInstance.get(`/statistics/editor/teams/${tId}/user-log`);

export const searchMemberReport = (tId: string, searchKeyword: string) =>
  axiosInstance.get(
    `/statistics/editor/teams/${tId}/user-log/serach?name=${searchKeyword}`
  );

export const getMemberReportDetail = (tId: string, searchId: string) =>
  axiosInstance.get(`/statistics/eidtor/teams/${tId}/users/${searchId}/report`);
