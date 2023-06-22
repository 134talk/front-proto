import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { login, logout } from 'shared/api/userApi';

type Res = {
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

  const handleUserData = ({ data }: Res) => {
    const { accessToken, userId, isAdmin, nickname, teamCode } = data;
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

  const { mutate: signIn } = useMutation((code: string) => login(code), {
    onSuccess: res => handleUserData(res),
  });

  const { mutate: signOut } = useMutation(logout, {
    onSuccess: res => {
      sessionStorage.removeItem('token');
      localStorage.clear();
      navigate('/');
    },
  });

  return { signIn, signOut };
}
