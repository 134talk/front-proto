import type { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import {
  getChatReport,
  getFeedbackReport,
  getMemberReportDetail,
  getStatusReport,
} from 'shared/api/reportApi';
import queryKeys from 'shared/constants/queryKeys';
import useUserData from 'shared/hooks/useUserData';

type StatusRes = {
  type1: { emotion: string; emotionCount: number }[];
  type2: { act: string; actCount: number }[];
  type3: { status: string; statusCount: number }[];
};

type ChatRes = {
  emoticonScore: { emoticonName: string; score: number }[];
  keywordScore: { code: number; score: number }[];
  questionList: string[];
};

type FeedbackRes = {
  energyPercent: number;
  relationPercent: number;
  stablePercent: number;
  stressPercent: number;
};

type MemberRes = {
  chatCount: number;
  energyPercent: number;
  name: string;
  nickname: string;
  receivedEmoticons: { emoticon: string; totalCount: number }[];
  relationPercent: number;
  scorePercent: number;
  stablePercent: number;
  stressPercent: number;
};

type Args = {
  types: 'status' | 'chat' | 'feedback' | 'member';
  uid?: string;
};

export default function useReport({ types, uid }: Args) {
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

  const { data: memberData } = useQuery<AxiosResponse<MemberRes>, AxiosError>(
    [queryKeys.MEMBER_REPORT, teamCode],
    () => getMemberReportDetail(teamCode, uid),
    {
      enabled: types === 'member',
      refetchOnWindowFocus: false,
    }
  );

  return { statusData, chatData, feedbackData, memberData };
}
