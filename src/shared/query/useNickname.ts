import type { AxiosError, AxiosResponse } from 'axios';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { signNickname, updateNickname } from 'shared/api/userApi';

type Req = {
  code: string[];
};

export default function useNickname() {
  const [nickname, setNickname] = useState('');
  const [profile, setProfile] = useState('');

  const { mutate } = useMutation<AxiosResponse, AxiosError, Req>(
    ({ code }) => signNickname(code),
    {
      onSuccess: res => {
        setNickname(res.data?.nickname);
        setProfile(res.data?.profileUrl);
      },
    }
  );

  const { mutate: update } = useMutation<AxiosResponse, AxiosError, Req>(
    ({ code }) => updateNickname(code),
    {
      onSuccess: res => {
        setNickname(res.data?.nickname);
        setProfile(res.data?.profileUrl);
      },
    }
  );

  return { mutate, update, nickname, profile };
}
