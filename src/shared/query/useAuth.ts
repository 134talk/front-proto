import type { AxiosError, AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { login } from 'shared/api/userApi';

export default function useAuth() {
  const navigate = useNavigate();

  return useMutation<AxiosResponse, AxiosError, any, unknown>(
    (code: string) => login(code),
    {
      onSuccess: res => {
        sessionStorage.setItem('token', res.data.accessToken);
        localStorage.setItem('uid', res.data.userId);
        localStorage.setItem('isAdmin', res.data.isAdmin);
        if (res.data.teamCode) navigate(`/${res.data.teamCode}?tab=1`);
        else navigate('/sign');
      },
    }
  );
}
