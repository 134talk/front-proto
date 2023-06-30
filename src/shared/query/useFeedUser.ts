import type { AxiosError, AxiosResponse } from 'axios';
import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { getFeedUser } from 'shared/api/reportApi';
import queryKeys from 'shared/constants/queryKeys';

export type Res = {
  userId: number;
  name: string;
  nickname: string;
};

export default function useFeedUser(roomId: number) {
  const { data } = useQuery<AxiosResponse<Res[]>, AxiosError>(
    [queryKeys.FEED_USER],
    () => getFeedUser(roomId)
  );

  const feedUserList = useMemo(() => data?.data || [], [data]);

  return { feedUserList };
}
