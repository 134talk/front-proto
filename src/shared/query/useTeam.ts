import type { AxiosError, AxiosResponse } from 'axios';
import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { getTeam } from 'shared/api/chatApi';
import queryKeys from 'shared/constants/queryKeys';
import useUserData from 'shared/hooks/useUserData';

type Res = {
  id: number;
  nickname: string;
  name: string;
  profile_image_url: string;
}[];

export default function useTeam() {
  const { channel: tId } = useUserData();

  const { data } = useQuery<AxiosResponse<Res>, AxiosError>(
    [queryKeys.TEAM],
    () => getTeam(tId),
    {
      refetchOnWindowFocus: false,
    }
  );

  const teamList = useMemo(() => data?.data, [data]);

  return { teamList };
}
