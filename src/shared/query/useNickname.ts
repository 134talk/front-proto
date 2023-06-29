import type { AxiosError, AxiosResponse } from 'axios';
import { useMemo } from 'react';
import { useMutation } from 'react-query';
import { updateNickname } from 'shared/api/userApi';

type Req = {
  code: string[];
};

type Res = {
  nickname: string;
  profileUrl: string;
};

export default function useNickname() {
  const { mutate, data } = useMutation<AxiosResponse<Res>, AxiosError, Req>(
    ({ code }) => updateNickname(code)
  );

  const { nickname, profile } = useMemo(
    () => ({
      nickname: data?.data.nickname,
      profile: data?.data.profileUrl,
    }),
    [data]
  );

  return { mutate, nickname, profile };
}
