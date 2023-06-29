import type { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { getUserReport, getUserReportDetail } from 'shared/api/reportApi';
import queryKeys from 'shared/constants/queryKeys';
import useUserData from 'shared/hooks/useUserData';

type Res = {
  myReportList: string[];
};

type DetailRes = {
  date: string;
  count: number;
  effect: { energy: number; relation: number; stable: number; stress: number };
  receivedEmoticons: { name: string; count: number }[][];
  remainedSentences: string[];
  scores: number[];
  feedbacks: { nickname: string; profileImgUrl: string; content: string }[];
};

export default function useUserChatData(date?: string) {
  const { channel: teamCode } = useUserData();

  const { data } = useQuery<AxiosResponse<Res>, AxiosError>(
    [queryKeys.USER_REPORT, teamCode],
    () => getUserReport(teamCode),
    {
      enabled: !date,
      refetchOnWindowFocus: false,
    }
  );

  const { data: detailData } = useQuery<AxiosResponse<DetailRes>, AxiosError>(
    [queryKeys.USER_REPORT, teamCode, date],
    () => getUserReportDetail(teamCode, date),
    {
      enabled: !!date,
      refetchOnWindowFocus: false,
    }
  );

  return { data, detailData };
}
