import type { AxiosError, AxiosResponse } from 'axios';
import { useMutation, useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { login, logout } from 'shared/api/userApi';
import queryKeys from 'shared/constants/queryKeys';
import { useAppDispatch } from 'shared/store/store';

type Res = {
  accessToken: string;
  userId: number;
  isAdmin: boolean;
  nickname: string;
  teamCode: string;
  name: string;
  guideConfirmDate: string;
};

export default function useAuth(code?: string) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleUserData = ({
    accessToken,
    userId,
    isAdmin,
    nickname,
    teamCode,
    name,
    guideConfirmDate,
  }: Res) => {
    sessionStorage.setItem('token', accessToken);
    localStorage.setItem('uid', String(userId));
    localStorage.setItem('channel', teamCode);
    localStorage.setItem('isAdmin', String(isAdmin));
    localStorage.setItem('nickname', nickname);
    localStorage.setItem('name', name);

    if (teamCode && nickname) {
      navigate('/chats');
    } else if (!teamCode && !nickname) {
      navigate('/sign');
    } else {
      navigate('/nickname/guide');
    }
  };

  const { refetch: signIn } = useQuery<AxiosResponse, AxiosError>(
    [queryKeys.AUTH],
    () => login(code),
    {
      onSuccess: res => {
        let userData = res.data.data.user;
        let tokenData = res.data.data.token;
        let accessToken = tokenData.accessToken;
        let userId = userData.id;
        let isAdmin = userData.role === 'editor';
        let nickname = userData.nickname;
        let teamCode = userData.team.code;
        let name = userData.name;
        let guideConfirmDate = userData.guide_confirm_date;
        handleUserData({
          accessToken,
          userId,
          isAdmin,
          nickname,
          teamCode,
          name,
          guideConfirmDate,
        });
      },
    }
  );

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
