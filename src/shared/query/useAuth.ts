import type { AxiosError, AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { login, logout } from 'shared/api/userApi';
import { useAppDispatch } from 'shared/store/store';

type Res = {
  accessToken: string;
  userId: number;
  isAdmin: boolean;
  nickname: string;
  teamCode: string;
};

export default function useAuth() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleUserData = ({
    accessToken,
    userId,
    isAdmin,
    nickname,
    teamCode,
  }: Res) => {
    sessionStorage.setItem('token', accessToken);
    localStorage.setItem('uid', String(userId));
    localStorage.setItem('channel', teamCode);
    localStorage.setItem('isAdmin', String(isAdmin));
    localStorage.setItem('nickname', nickname);

    if (teamCode && nickname) {
      navigate('/channel');
    } else if (!teamCode && !nickname) {
      navigate('/sign');
    } else {
      navigate('/nickname/guide');
    }
  };

  const { mutate: signIn } = useMutation<
    AxiosResponse<Res>,
    AxiosError,
    string
  >(code => login(code), {
    onSuccess: res => handleUserData(res.data),
  });

  const { mutate: signOut } = useMutation<AxiosResponse, AxiosError>(logout, {
    onSuccess: res => {
      sessionStorage.removeItem('token');
      localStorage.clear();
      dispatch({ type: 'disconnect' });
      navigate('/');
    },
  });

  return { signIn, signOut };
}
