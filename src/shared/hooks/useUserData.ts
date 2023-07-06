import { useEffect, useMemo } from 'react';
import { silentRefresh } from 'shared/api/userApi';

export default function useUserData() {
  const token = sessionStorage.getItem('token');
  const uid = localStorage.getItem('uid');
  const channel = localStorage.getItem('channel');
  const isAdmin = localStorage.getItem('isAdmin');
  const nickname = localStorage.getItem('nickname');

  const optVal = localStorage.getItem('optVal');
  const optText = localStorage.getItem('optText');

  useEffect(() => {
    if (!token) silentRefresh();
  }, [token]);

  const isUserData = useMemo(
    () => !!uid && !!channel && !!isAdmin && !!nickname,
    [uid, channel, isAdmin, nickname]
  );

  return {
    token,
    uid,
    channel,
    isAdmin,
    nickname,
    isUserData,
    optVal,
    optText,
  };
}
