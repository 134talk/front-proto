import type { AxiosError, AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { signAdmin, signUser } from 'shared/api/userApi';

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
  team_code: string;
};

export default function useSign(uName: string) {
  const navigate = useNavigate();

  const onSuccessCallback = ({ team_code }: Res) => {
    localStorage.setItem('channel', team_code);
    localStorage.setItem('name', uName);
    navigate('/nickname/guide');
  };

  const { mutate: onSignUser } = useMutation<
    AxiosResponse<Res>,
    AxiosError,
    UserReq
  >(({ uId, name, teamCode }) => signUser(uId, name, teamCode), {
    onSuccess: res => onSuccessCallback(res?.data),
  });

  const { mutate: onSignAdmin } = useMutation<
    AxiosResponse<Res>,
    AxiosError,
    AdminReq
  >(({ uId, name, teamName }) => signAdmin(uId, name, teamName), {
    onSuccess: res => onSuccessCallback(res?.data),
  });

  return { onSignUser, onSignAdmin };
}
