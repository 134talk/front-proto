import type { AxiosError, AxiosResponse } from 'axios';
import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { getMyUserReport, getUserReportDetail } from 'shared/api/reportApi';
import queryKeys from 'shared/constants/queryKeys';
import useUserData from 'shared/hooks/useUserData';

type Res = {
  data: {
    my_report_list: {
      report_date: string;
      report_id: number;
    }[];
  };
};

type DetailRes = {
  data: {
    report_date: string;
    conversation_count: number;
    effect: {
      energy: number;
      relation: number;
      stable: number;
      stress: number;
    };
    received_emotions: { emotion_name: string; emotion_count: number }[][];
    feed_contents: string[];
    feed_scores: number[];
    review_list: {
      nickname: string;
      profile_img_url: string;
      review_content: string;
    }[];
  };
};

export default function useUserChatData(rId?: string) {
  const { uId } = useUserData();

  const { data } = useQuery<AxiosResponse<Res>, AxiosError>(
    [queryKeys.MY_USER_REPORT, uId],
    () => getMyUserReport(Number(uId)),
    {
      onError: err => console.log(err),
      enabled: !rId,
      refetchOnWindowFocus: false,
    }
  );

  const { dateList } = useMemo(
    () => ({
      dateList: data?.data.data.my_report_list,
    }),
    [data]
  );

  const { data: reportDetailData } = useQuery<
    AxiosResponse<DetailRes>,
    AxiosError
  >(
    [queryKeys.MY_USER_REPORT_DETAILS, rId],
    () => getUserReportDetail(uId, rId),
    {
      enabled: !!rId,
      refetchOnWindowFocus: false,
    }
  );

  const { detailData } = useMemo(
    () => ({
      detailData: reportDetailData?.data.data,
    }),
    [reportDetailData]
  );

  return { dateList, detailData };
}
