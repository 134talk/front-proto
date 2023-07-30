import type { AxiosError, AxiosResponse } from 'axios';
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
  emotion_array: { emotion: string; emotion_count: number }[];
  action_array: { action: string; action_count: number }[];
  state_array: { state: string; state_count: number }[];
};

type ChatRes = {
  emotion_score: { emotion_name: string; emotion_count: number }[];
  keyword_score: { keyword_id: number; keyword_count: number }[];
  question_list: string[];
};

type FeedbackRes = {
  energy_percent: number;
  relation_percent: number;
  stable_percent: number;
  stress_percent: number;
};

type MemberRes = {
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

type ListRes = {
  id: number;
  profile_image_url: string;
  name: string;
  nickname: string;
  conversation_count: number;
}[];

type Args = {
  types: 'status' | 'chat' | 'feedback' | 'member' | 'list';
  uid?: string;
  keyword?: string;
};

export default function useReport({ types, uid, keyword }: Args) {
  const { channel: teamCode } = useUserData();

  const { data: statusData } = useQuery<AxiosResponse<StatusRes>, AxiosError>(
    [queryKeys.STATUS_REPORT, teamCode, types],
    () => getStatusReport(teamCode),
    {
      enabled: types === 'status',
      refetchOnWindowFocus: false,
    }
  );

  const { data: chatData } = useQuery<AxiosResponse<ChatRes>, AxiosError>(
    [queryKeys.CHAT_REPORT, teamCode, types],
    () => getChatReport(teamCode),
    {
      enabled: types === 'chat',
      refetchOnWindowFocus: false,
    }
  );

  const { data: feedbackData } = useQuery<
    AxiosResponse<FeedbackRes>,
    AxiosError
  >(
    [queryKeys.FEEDBACK_REPORT, teamCode, types],
    () => getFeedbackReport(teamCode),
    {
      enabled: types === 'feedback',
      refetchOnWindowFocus: false,
    }
  );

  const { data: memberDataList, refetch } = useQuery<
    AxiosResponse<ListRes>,
    AxiosError
  >(
    [queryKeys.MEMBER_REPORT, teamCode],
    () =>
      !!keyword
        ? searchMemberReport(teamCode, keyword)
        : getMemberReport(teamCode),
    {
      enabled: types === 'list',
      refetchOnWindowFocus: false,
    }
  );

  const { data: memberData } = useQuery<AxiosResponse<MemberRes>, AxiosError>(
    [queryKeys.MEMBER_REPORT, teamCode],
    () => getMemberReportDetail(teamCode, uid),
    {
      enabled: types === 'member',
      refetchOnWindowFocus: false,
    }
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
