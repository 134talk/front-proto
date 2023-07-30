import type { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { getUserReport, getUserReportDetail } from 'shared/api/reportApi';
import queryKeys from 'shared/constants/queryKeys';
import useUserData from 'shared/hooks/useUserData';

type Res = {
  my_report_list: {
    report_date: string;
    report_id: number;
  }[];
};

type DetailRes = {
  report_date: string;
  conversation_count: number;
  effect: { energy: number; relation: number; stable: number; stress: number };
  received_emotions: { emotion_name: string; emotion_count: number }[][];
  feed_contents: string[];
  feed_scores: number[];
  review_list: {
    nickname: string;
    profile_img_url: string;
    review_content: string;
  }[];
};

export default function useUserChatData(rId?: string) {
  const { uId } = useUserData();

  const { data } = useQuery<AxiosResponse<Res>, AxiosError>(
    [queryKeys.USER_REPORT, uId],
    () => getUserReport(uId),
    {
      enabled: !rId,
      refetchOnWindowFocus: false,
    }
  );

  const { data: detailData } = useQuery<AxiosResponse<DetailRes>, AxiosError>(
    [queryKeys.USER_REPORT, uId, rId],
    () => getUserReportDetail(uId, rId),
    {
      enabled: !!rId,
      refetchOnWindowFocus: false,
    }
  );

  return { data, detailData };
}
