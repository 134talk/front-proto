import type { AxiosError, AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { signAdmin, signUser } from 'shared/api/userApi';

type Req = {
  name: string;
  team: string;
};

type Res = {
  data: {
    teamCode: string;
  };
};

export default function useSign() {
  const navigate = useNavigate();

  const onSuccessCallback = ({ data }: Res) => {
    const { teamCode } = data;
    localStorage.setItem('channel', teamCode);
    navigate('/nickname/guide');
  };

  const { mutate: onSignUser } = useMutation<AxiosResponse, AxiosError, Req>(
    ({ name, team }) => signUser(name, team),
    {
      onSuccess: res => onSuccessCallback(res),
    }
  );

  const { mutate: onSignAdmin } = useMutation<AxiosResponse, AxiosError, Req>(
    ({ name, team }) => signAdmin(name, team),
    {
      onSuccess: res => onSuccessCallback(res),
    }
  );

  return { onSignUser, onSignAdmin };
}
