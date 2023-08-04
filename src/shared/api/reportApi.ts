import type { ReviewList } from 'shared/query/useFeedOption';
import axiosInstance from './instance';

export const getFeedUser = (conversation_room_id: number) =>
  axiosInstance.get(
    `/conversation-rooms/${conversation_room_id}/conversation-users`
  );

export const postFeedOption = (
  conversation_room_id: number,
  conversation_user_id: number,
  feed_content: string,
  feed_score: number,
  review_list: ReviewList[]
) =>
  axiosInstance.post('/feedback/option', {
    conversation_room_id,
    conversation_user_id,
    feed_content,
    feed_score,
    review_list,
  });

export const getFeedRequirement = () => axiosInstance.get('/feedback');

export const postFeedRequirement = (
  conversation_room_id: number,
  conversation_user_id: number,
  status_energy: number,
  status_relation: number,
  status_stable: number,
  status_stress: number
) =>
  axiosInstance.post('/feedback', {
    conversation_room_id,
    conversation_user_id,
    status_energy,
    status_relation,
    status_stable,
    status_stress,
  });

export const putFeedRequirement = (
  status_id: number,
  conversation_room_id: number,
  conversation_user_id: number,
  status_energy: number,
  status_relation: number,
  status_stable: number,
  status_stress: number
) =>
  axiosInstance.put(`/feedback/${status_id}`, {
    conversation_room_id,
    conversation_user_id,
    status_energy,
    status_relation,
    status_stable,
    status_stress,
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
