import type { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { getFeedbackReport, getStatusReport } from 'shared/api/reportApi';
import queryKeys from 'shared/constants/queryKeys';

type StatusRes = {
  type1: { emotion: string; score: string }[];
  type2: { act: string; score: string }[];
  type3: { status: string; score: string }[];
};

type FeedbackRes = {
  energyPercent: number;
  relationPercent: number;
  stablePercent: number;
  stressPercent: number;
};

export default function useReport(teamCode: string) {
  const { data: statusData } = useQuery<AxiosResponse<StatusRes>, AxiosError>(
    [queryKeys.REPORT, teamCode],
    () => getStatusReport(teamCode),
    {
      refetchOnWindowFocus: false,
    }
  );

  const { data: feedbackData } = useQuery<
    AxiosResponse<FeedbackRes>,
    AxiosError
  >([queryKeys.REPORT, teamCode], () => getFeedbackReport(teamCode), {
    refetchOnWindowFocus: false,
  });

  return { statusData, feedbackData };
}
