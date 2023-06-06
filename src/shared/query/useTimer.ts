import type { AxiosError, AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import { setTimer } from 'shared/api/chatApi';

type Req = {
  time: string;
};

export default function useTimer() {
  const { mutate } = useMutation<AxiosResponse, AxiosError, Req>(
    ({ time }) => setTimer(time),
    {
      onError: err => console.log(err),
    }
  );
  return { mutate };
}
