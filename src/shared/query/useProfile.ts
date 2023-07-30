import type { AxiosError, AxiosResponse } from 'axios';
import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { getProfile } from 'shared/api/userApi';
import queryKeys from 'shared/constants/queryKeys';
import useUserData from 'shared/hooks/useUserData';

type Res = {
  profile_image_url: string;
  name: string;
  nickname: string;
  name_code: {
    emotion_code: number;
    action_code: number;
    state_code: number;
  };
};

export default function useProfile() {
  const { uId } = useUserData();
  const { data } = useQuery<AxiosResponse<Res>, AxiosError>(
    [queryKeys.PROFILE],
    () => getProfile(uId),
    {
      refetchOnWindowFocus: false,
    }
  );

  const { profile, name, nickname, code } = useMemo(
    () => ({
      profile: data?.data.profile_image_url,
      name: data?.data.name,
      nickname: data?.data.nickname,
      code: data?.data.name_code,
    }),
    [data]
  );

  return { profile, name, nickname, code };
}
