import type { AxiosError, AxiosResponse } from 'axios';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getTimer, setTimer } from 'shared/api/chatApi';
import queryKeys from 'shared/constants/queryKeys';

type Req = {
  time: string;
};

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

  const { mutate } = useMutation<AxiosResponse, AxiosError, Req>(
    ({ time }) => setTimer(time),
    {
      onSuccess: res => queryClient.invalidateQueries([queryKeys.TIMER]),
    }
  );

  return { data, mutate };
}
