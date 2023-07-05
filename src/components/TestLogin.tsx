import React from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from 'shared/api/instance';

type Res = {
  accessToken: string;
  userId: number;
  isAdmin: boolean;
  nickname: string;
  teamCode: string;
};

export default function TestLogin() {
  const navigate = useNavigate();

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

  const loginForTest = (id: string, password: string) =>
    axiosInstance
      .post('/auth/login/test', { id: id, password: password })
      .then(res => handleUserData(res.data));

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    loginForTest(
      formData.get('id') as string,
      formData.get('password') as string
    );
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="id" name="id" />
      <input type="password" placeholder="password" name="password" />
      <button type="submit">로그인</button>
    </form>
  );
}
