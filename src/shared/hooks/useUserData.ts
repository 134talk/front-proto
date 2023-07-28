import { useEffect, useMemo } from 'react';
import { silentRefresh } from 'shared/api/userApi';

export default function useUserData() {
  const token = sessionStorage.getItem('token');
  const uId = localStorage.getItem('uid');
  const channel = localStorage.getItem('channel');
  const isAdmin = localStorage.getItem('isAdmin');
  const nickname = localStorage.getItem('nickname');
  const name = localStorage.getItem('name');

  const selectKey = localStorage.getItem('selectKey');
  const tutorialKey = localStorage.getItem('tutorialKey');
  const emotionKey = localStorage.getItem('emotionKey');
  const optVal = localStorage.getItem('optVal');
  const optText = localStorage.getItem('optText');

  useEffect(() => {
    if (!token) silentRefresh();
  }, [token]);

  const isUserData = useMemo(
    () => !!uId && !!channel && !!isAdmin && !!nickname,
    [uId, channel, isAdmin, nickname]
  );

  return {
    token,
    uId,
    channel,
    isAdmin,
    nickname,
    name,
    isUserData,
    selectKey,
    tutorialKey,
    emotionKey,
    optVal,
    optText,
  };
}
