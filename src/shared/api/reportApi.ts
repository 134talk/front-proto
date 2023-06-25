import axiosInstance from './instance';

export const getStatusReport = (teamCode: string) =>
  axiosInstance.get(`/statistics/team/character/${teamCode}`);

// 대화 기록 리포트 상세 조회

export const getFeedbackReport = (teamCode: string) =>
  axiosInstance.get(`/statistics/feedback/detail/${teamCode}`);

export const getUserReport = (teamCode: string) =>
  axiosInstance.get(`/statistics/user/report/${teamCode}`);

// 유저 대화 상세 조회
