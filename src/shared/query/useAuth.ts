import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { login } from 'shared/api/userApi';

type UserData = {
  data: {
    accessToken: string;
    userId: number;
    isAdmin: boolean;
    nickname: string;
    teamCode: string;
  };
};

export default function useAuth() {
  const navigate = useNavigate();

  const handleUserData = ({ data }: UserData) => {
    const { accessToken, userId, isAdmin, nickname, teamCode } = data;
    sessionStorage.setItem('token', accessToken);
    localStorage.setItem('uid', String(userId));
    localStorage.setItem('isAdmin', String(isAdmin));
    localStorage.setItem('nickname', nickname);

    if (teamCode && nickname) {
      navigate(`/channel/${teamCode}?tab=1`);
    } else if (!teamCode && !nickname) {
      navigate('/sign');
    } else {
      navigate('/nickname/guide');
    }
  };

  return useMutation((code: string) => login(code), {
    onSuccess: res => handleUserData(res),
  });
}
