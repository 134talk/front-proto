import type { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import {
  getChatReport,
  getFeedbackReport,
  getStatusReport,
} from 'shared/api/reportApi';
import queryKeys from 'shared/constants/queryKeys';
import useUserData from 'shared/hooks/useUserData';

type StatusRes = {
  type1: { emotion: string; score: number }[];
  type2: { act: string; score: number }[];
  type3: { status: string; score: number }[];
};

type ChatRes = {
  emoticonScore: { code: number; name: string; score: number }[];
  keywordScore: { code: number; score: number }[];
  questionList: string[];
};

type FeedbackRes = {
  energyPercent: number;
  relationPercent: number;
  stablePercent: number;
  stressPercent: number;
};

export default function useReport(types: 'status' | 'chat' | 'feedback') {
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

  return { statusData, chatData, feedbackData };
}
