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
  name: string;
  nickname: string;
  teamId: number;
  teamCode: string;
};

export default function useAuth(code?: string) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleUserData = ({
    accessToken,
    userId,
    isAdmin,
    name,
    nickname,
    teamId,
    teamCode,
  }: Res) => {
    sessionStorage.setItem('token', accessToken);
    localStorage.setItem('uid', String(userId));
    localStorage.setItem('isAdmin', String(isAdmin));
    localStorage.setItem('name', name);
    localStorage.setItem('nickname', nickname);
    localStorage.setItem('channel', String(teamId));
    localStorage.setItem('teamCode', teamCode);
    if (teamCode && nickname) {
      navigate('/chats');
    } else if (!teamCode && !nickname) {
      navigate('/sign');
    } else {
      navigate('/nickname/guide');
    }
  };

  const handleGuideConfirm = (guideConfirmDate: string) => {
    if (guideConfirmDate === null)
      localStorage.setItem('isGuideAccess', 'true');
    else {
      let date = new Date();
      let year = date.getFullYear();
      let month = ('0' + (1 + date.getMonth())).slice(-2);
      let day = ('0' + date.getDate()).slice(-2);

      let today = year + '-' + month + '-' + day;

      localStorage.setItem('isGuideAccess', String(guideConfirmDate === today));
    }
  };

  const { refetch: signIn } = useQuery<AxiosResponse, AxiosError>(
    [queryKeys.AUTH],
    () => login(code),
    {
      onSuccess: res => {
        let { token: tokenData, user: userData } = res.data.data;
        let accessToken = tokenData.access_token;
        let userId = userData.id;
        let isAdmin = userData.role === 'editor';
        let name = userData.name;
        let nickname = userData.nickname;
        let teamId = userData.team_id;
        let teamCode = userData.team_code;
        let guideConfirmDate = userData.guide_confirm_date;
        handleUserData({
          accessToken,
          userId,
          isAdmin,
          name,
          nickname,
          teamId,
          teamCode,
        });
        handleGuideConfirm(guideConfirmDate);
      },
      enabled: !!code,
    }
  );

  const { mutate: signOut } = useMutation<AxiosResponse, AxiosError>(logout, {
    onSuccess: res => {
      sessionStorage.removeItem('token');
      localStorage.removeItem('uid');
      localStorage.removeItem('channel');
      localStorage.removeItem('teamCode');
      localStorage.removeItem('isAdmin');
      localStorage.removeItem('nickname');
      localStorage.removeItem('name');
      localStorage.removeItem('isGuideAccess');
      dispatch({ type: 'disconnect' });
      navigate('/');
    },
  });

  return { signIn, signOut };
}
