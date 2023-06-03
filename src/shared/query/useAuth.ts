import type { AxiosError, AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import { login } from 'shared/api/userApi';

export default function useAuth() {
  return useMutation<AxiosResponse, AxiosError, any, unknown>(
    (code: string) => login(code),
    {
      onSuccess: res => console.log(res),
      onError: err => console.log(err),
    }
  );
}

// TODO:
// accessToken => sessionStorage
// refreshToken => cookie
// uid => localStorage
// isAdmin => localStorage
// teamCode가 있으면 참가자페이지로, 없으면 회원등록페이지로
