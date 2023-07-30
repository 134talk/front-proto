import type { AxiosError, AxiosResponse } from 'axios';
import { useMemo } from 'react';
import { useMutation } from 'react-query';
import { updateNickname } from 'shared/api/userApi';

type Req = {
  uId: string;
  code: number[];
};

type Res = {
  data: {
    nickname: string;
    profile_image_url: string;
  };
};

export default function useNickname() {
  const { mutate, data } = useMutation<AxiosResponse<Res>, AxiosError, Req>(
    ({ uId, code }) => updateNickname(uId, code)
  );

  const { nickname, profile } = useMemo(
    () => ({
      nickname: data?.data.data.nickname,
      profile: data?.data.data.profile_image_url,
    }),
    [data]
  );

  return { mutate, nickname, profile };
}
