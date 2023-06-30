import type { AxiosError, AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { signAdmin, signUser } from 'shared/api/userApi';

type UserReq = {
  name: string;
  teamCode: string;
};

type AdminReq = {
  name: string;
  teamName: string;
};

type Res = {
  teamCode: string;
};

export default function useSign() {
  const navigate = useNavigate();

  const onSuccessCallback = ({ teamCode }: Res) => {
    localStorage.setItem('channel', teamCode);
    navigate('/nickname/guide');
  };

  const { mutate: onSignUser } = useMutation<
    AxiosResponse<Res>,
    AxiosError,
    UserReq
  >(({ name, teamCode }) => signUser(name, teamCode), {
    onSuccess: res => onSuccessCallback(res?.data),
  });

  const { mutate: onSignAdmin } = useMutation<
    AxiosResponse<Res>,
    AxiosError,
    AdminReq
  >(({ name, teamName }) => signAdmin(name, teamName), {
    onSuccess: res => onSuccessCallback(res?.data),
  });

  return { onSignUser, onSignAdmin };
}
