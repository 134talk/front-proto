import type { AxiosError, AxiosResponse } from 'axios';
import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { getFeedUser } from 'shared/api/reportApi';
import queryKeys from 'shared/constants/queryKeys';

type Res = {
  userId: number;
  userName: string;
  nickname: string;
};

export default function useFeedUser(roomId: string) {
  const { data } = useQuery<AxiosResponse<Res[]>, AxiosError>(
    [queryKeys.FEEDUSER],
    () => getFeedUser(roomId)
  );

  const feedUserList = useMemo(() => data?.data || [], [data]);

  return { feedUserList };
}
