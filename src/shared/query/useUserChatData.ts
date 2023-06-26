import type { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { getUserReport } from 'shared/api/reportApi';
import queryKeys from 'shared/constants/queryKeys';

type Res = {
  myReportList: string[];
};

export default function useUserChatData(teamCode: string) {
  const { data } = useQuery<AxiosResponse<Res>, AxiosError>(
    [queryKeys.REPORT, teamCode],
    () => getUserReport(teamCode),
    {
      refetchOnWindowFocus: false,
    }
  );

  return { data };
}
