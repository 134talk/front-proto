import type { AxiosError, AxiosResponse } from 'axios';
import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { getProfile } from 'shared/api/userApi';
import queryKeys from 'shared/constants/queryKeys';

type Res = {
  profileUrl: string;
  name: string;
  nickname: string;
  nameCode: number[];
};

export default function useProfile() {
  const { data } = useQuery<AxiosResponse<Res>, AxiosError>(
    [queryKeys.PROFILE],
    getProfile,
    {
      refetchOnWindowFocus: false,
    }
  );

  const { profile, name, nickname, code } = useMemo(
    () => ({
      profile: data?.data.profileUrl,
      name: data?.data.name,
      nickname: data?.data.nickname,
      code: data?.data.nameCode,
    }),
    [data]
  );

  return { profile, name, nickname, code };
}
