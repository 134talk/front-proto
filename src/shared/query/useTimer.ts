import type { AxiosError, AxiosResponse } from 'axios';
import { useMemo } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getTimer, setTimer } from 'shared/api/chatApi';
import queryKeys from 'shared/constants/queryKeys';
import useUserData from 'shared/hooks/useUserData';

type Res = {
  data: { timeout: number };
};

export default function useTimer() {
  const queryClient = useQueryClient();
  const { channel: tId } = useUserData();

  const { data } = useQuery<AxiosResponse<Res>, AxiosError>(
    [queryKeys.TIMER],
    () => getTimer(tId),
    {
      refetchOnWindowFocus: false,
    }
  );

  const { mutate } = useMutation<AxiosResponse<Res>, AxiosError, string>(
    time => setTimer(tId, time),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.TIMER]);
        window.location.reload();
      },
    }
  );

  const time = useMemo(() => data?.data.data.timeout, [data]);

  return { time, mutate };
}
