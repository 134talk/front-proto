import type { AxiosError, AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import { signNickname, updateNickname } from 'shared/api/userApi';

type Req = {
  code: string;
};

export default function useNickname() {
  const { mutate } = useMutation<AxiosResponse, AxiosError, Req>(
    ({ code }) => signNickname(code),
    {
      onSuccess: res => console.log(res),
    }
  );

  const { mutate: update } = useMutation<AxiosResponse, AxiosError, Req>(
    ({ code }) => updateNickname(code),
    {
      onSuccess: res => console.log(res),
    }
  );

  return { mutate, update };
}
