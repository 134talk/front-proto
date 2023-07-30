import type { ReviewList } from 'shared/query/useFeedOption';
import axiosInstance from './instance';

export const getFeedUser = (conversation_room_id: number) =>
  axiosInstance.get(
    `/conversation-rooms/${conversation_room_id}/converstaion-users`
  );

export const postFeedOption = (
  conversation_room_id: number,
  feed_content: string,
  feed_score: number,
  review_list: ReviewList[]
) =>
  axiosInstance.post('/feedback/option', {
    conversation_room_id,
    feed_content,
    feed_score,
    review_list,
  });

export const getFeedRequirement = () => axiosInstance.get('/feedback');

export const postFeedRequirement = (
  conversation_room_id: number,
  status_energy: number,
  status_relation: number,
  status_stable: number,
  status_stress: number
) =>
  axiosInstance.post('/feedback', {
    conversation_room_id,
    status_energy,
    status_relation,
    status_stable,
    status_stress,
  });

export const putFeedRequirement = (
  conversation_room_id: number,
  status_energy: number,
  status_relation: number,
  status_stable: number,
  status_stress: number
) =>
  axiosInstance.post('/feedback', {
    conversation_room_id,
    status_energy,
    status_relation,
    status_stable,
    status_stress,
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
