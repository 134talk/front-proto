import type { AxiosError, AxiosResponse } from 'axios';
import { useMemo } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getTimer, setTimer } from 'shared/api/chatApi';
import queryKeys from 'shared/constants/queryKeys';

type Res = {
  timeout: number;
};

export default function useTimer() {
  const queryClient = useQueryClient();
  const { data } = useQuery<AxiosResponse<Res>, AxiosError>(
    [queryKeys.TIMER],
    getTimer,
    {
      refetchOnWindowFocus: false,
    }
  );

  const { mutate } = useMutation<AxiosResponse<Res>, AxiosError, string>(
    time => setTimer(time),
    {
      onSuccess: _ => queryClient.invalidateQueries([queryKeys.TIMER]),
    }
  );

  const time = useMemo(() => data?.data.timeout, [data]);

  return { time, mutate };
}
