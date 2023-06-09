import { useMemo } from 'react';

export default function useUserData() {
  const token = sessionStorage.getItem('token');
  const uid = localStorage.getItem('uid');
  const channel = localStorage.getItem('channel');
  const isAdmin = localStorage.getItem('isAdmin');
  const nickname = localStorage.getItem('nickname');

  const isAuth = useMemo(
    () => !!token && !!uid && !!channel && !!isAdmin && !!nickname,
    [token, uid, channel, isAdmin, nickname]
  );

  return { token, uid, channel, isAdmin, nickname, isAuth };
}
