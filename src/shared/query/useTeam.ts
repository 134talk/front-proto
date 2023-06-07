import type { AxiosError, AxiosResponse } from 'axios';
import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { getTeam } from 'shared/api/chatApi';
import queryKeys from 'shared/constants/queryKeys';

type Res = {
  userId: number;
  nickname: string;
  name: string;
  profileUrl: string;
}[];

export default function useTeam() {
  const { data } = useQuery<AxiosResponse<Res>, AxiosError>(
    [queryKeys.TEAM],
    getTeam
  );

  const teamList = useMemo(() => data?.data, [data]);

  return { teamList };
}
