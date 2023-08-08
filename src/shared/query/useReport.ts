import type { AxiosError, AxiosResponse } from 'axios';
import { useMemo } from 'react';
import { useQuery } from 'react-query';
import {
  getChatReport,
  getFeedbackReport,
  getMemberReport,
  getMemberReportDetail,
  getStatusReport,
  searchMemberReport,
} from 'shared/api/reportApi';
import queryKeys from 'shared/constants/queryKeys';
import useUserData from 'shared/hooks/useUserData';

type StatusRes = {
  data: {
    emotion_array: { emotion_name: string; emotion_count: number }[];
    action_array: { action: string; action_count: number }[];
    state_array: { state: string; state_count: number }[];
  };
};

type ChatRes = {
  data: {
    emotion_score: { emotion_name: string; emotion_count: number }[];
    keyword_score: { keyword_id: number; keyword_count: number }[];
    question_list: string[];
  };
};

type FeedbackRes = {
  data: {
    energy_percent: number;
    relation_percent: number;
    stable_percent: number;
    stress_percent: number;
  };
};

type MemberRes = {
  data: {
    converstaion_count: number;
    energy_percent: number;
    name: string;
    nickname: string;
    received_emotions: { emotion_name: string; emotion_count: number }[];
    relation_percent: number;
    score_percent: number;
    stable_percent: number;
    stress_percent: number;
  };
};

type ListRes = {
  data: {
    id: number;
    profile_image_url: string;
    name: string;
    nickname: string;
    conversation_count: number;
  }[];
};

type Args = {
  types: 'status' | 'chat' | 'feedback' | 'member' | 'list';
  uid?: string;
  keyword?: string;
};

export default function useReport({ types, uid, keyword }: Args) {
  const { channel: tId } = useUserData();

  const { data: statusResData } = useQuery<
    AxiosResponse<StatusRes>,
    AxiosError
  >([queryKeys.STATUS_REPORT, tId, types], () => getStatusReport(tId), {
    enabled: types === 'status',
    refetchOnWindowFocus: false,
  });
  const { statusData } = useMemo(
    () => ({
      statusData: statusResData?.data.data,
    }),
    [statusResData]
  );

  const { data: chatResData } = useQuery<AxiosResponse<ChatRes>, AxiosError>(
    [queryKeys.CHAT_REPORT, tId, types],
    () => getChatReport(tId),
    {
      enabled: types === 'chat',
      refetchOnWindowFocus: false,
    }
  );
  const { chatData } = useMemo(
    () => ({
      chatData: chatResData?.data.data,
    }),
    [chatResData]
  );

  const { data: feedbackResData } = useQuery<
    AxiosResponse<FeedbackRes>,
    AxiosError
  >([queryKeys.FEEDBACK_REPORT, tId, types], () => getFeedbackReport(tId), {
    enabled: types === 'feedback',
    refetchOnWindowFocus: false,
  });
  const { feedbackData } = useMemo(
    () => ({
      feedbackData: feedbackResData?.data.data,
    }),
    [feedbackResData]
  );

  const { data: memberDataResList, refetch } = useQuery<
    AxiosResponse<ListRes>,
    AxiosError
  >(
    [queryKeys.MEMBER_REPORT, tId],
    () => (!!keyword ? searchMemberReport(tId, keyword) : getMemberReport(tId)),
    {
      enabled: types === 'list',
      refetchOnWindowFocus: false,
    }
  );
  const { memberDataList } = useMemo(
    () => ({
      memberDataList: memberDataResList?.data.data,
    }),
    [memberDataResList]
  );

  const { data: memberResData } = useQuery<
    AxiosResponse<MemberRes>,
    AxiosError
  >([queryKeys.MEMBER_REPORT, tId], () => getMemberReportDetail(tId, uid), {
    enabled: types === 'member',
    refetchOnWindowFocus: false,
  });
  const { memberData } = useMemo(
    () => ({
      memberData: memberResData?.data.data,
    }),
    [memberResData]
  );

  return {
    statusData,
    chatData,
    feedbackData,
    memberDataList,
    memberData,
    refetch,
  };
}
