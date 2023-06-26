import axiosInstance from './instance';

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
