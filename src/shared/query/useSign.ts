import type { AxiosError, AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { signAdmin, signUser } from 'shared/api/userApi';
import useUserData from 'shared/hooks/useUserData';

type UserReq = {
  uId: string;
  name: string;
  teamCode: string;
};

type AdminReq = {
  uId: string;
  name: string;
  teamName: string;
};

type Res = {
  teamCode: string;
};

export default function useSign() {
  const navigate = useNavigate();
  const { uId } = useUserData();

  const onSuccessCallback = ({ teamCode }: Res) => {
    localStorage.setItem('channel', teamCode);
    navigate('/nickname/guide');
  };

  const { mutate: onSignUser } = useMutation<
    AxiosResponse<Res>,
    AxiosError,
    UserReq
  >(({ name, teamCode }) => signUser(uId, name, teamCode), {
    onSuccess: res => onSuccessCallback(res?.data),
  });

  const { mutate: onSignAdmin } = useMutation<
    AxiosResponse<Res>,
    AxiosError,
    AdminReq
  >(({ name, teamName }) => signAdmin(uId, name, teamName), {
    onSuccess: res => onSuccessCallback(res?.data),
  });

  return { onSignUser, onSignAdmin };
}
