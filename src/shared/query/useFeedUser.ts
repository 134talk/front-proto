import type { AxiosError, AxiosResponse } from 'axios';
import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { getFeedUser } from 'shared/api/reportApi';
import queryKeys from 'shared/constants/queryKeys';

type UserInfo = {
  id: number;
  nickname: string;
  name: string;
};

export type Res = {
  user_info: UserInfo[];
};

export default function useFeedUser(roomId: number) {
  const { data } = useQuery<AxiosResponse<Res>, AxiosError>(
    [queryKeys.FEED_USER],
    () => getFeedUser(roomId),
    { refetchOnWindowFocus: false }
  );

  const feedUserList = useMemo(() => data?.data.user_info || [], [data]);

  return { feedUserList };
}
