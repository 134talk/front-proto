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

export const getStatusReport = (teamCode: string) =>
  axiosInstance.get(`/statistics/team/character/${teamCode}`);

export const getFeedbackReport = (teamCode: string) =>
  axiosInstance.get(`/statistics/feedback/detail/${teamCode}`);

export const getChatReport = (teamCode: string) =>
  axiosInstance.get(`/statistics/report/chatlog/${teamCode}`);

export const getUserReport = (teamCode: string) =>
  axiosInstance.get(`/statistics/user/report/${teamCode}`);

export const getUserReportDetail = (teamCode: string, date: string) =>
  axiosInstance.get(`/statistics/user/report/${teamCode}/${date}`);

export const getMemberReport = (teamCode: string) =>
  axiosInstance.get(`/statistics/admin/report/list/${teamCode}`);

export const searchMemberReport = (teamCode: string, searchName: string) =>
  axiosInstance.get(
    `/statistics/admin/report/search/list/${teamCode}?searchName=${searchName}`
  );

export const getMemberReportDetail = (teamCode: string, searchId: string) =>
  axiosInstance.get(`/statistics/admin/user/report/${teamCode}/${searchId}`);
