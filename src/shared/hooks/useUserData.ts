import { useEffect, useMemo } from 'react';
import { silentRefresh } from 'shared/api/userApi';

export default function useUserData() {
  const token = sessionStorage.getItem('token');
  const uId = localStorage.getItem('uid');
  const channel = localStorage.getItem('channel');
  const teamCode = localStorage.getItem('teamCode');
  const isAdmin = localStorage.getItem('isAdmin');
  const nickname = localStorage.getItem('nickname');
  const name = localStorage.getItem('name');
  const isGuideAccess = localStorage.getItem('isGuideAccess');

  const selectKey = localStorage.getItem('selectKey');
  const tutorialKey = localStorage.getItem('tutorialKey');
  const emotionKey = localStorage.getItem('emotionKey');
  const optVal = localStorage.getItem('optVal');
  const optText = localStorage.getItem('optText');
  const feedbackKey = localStorage.getItem('feedbackKey');

  useEffect(() => {
    if (!token) silentRefresh();
  }, [token]);

  const isUserData = useMemo(
    () =>
      !!uId &&
      !!channel &&
      !!isAdmin &&
      !!nickname &&
      !!name &&
      !!isGuideAccess,
    [uId, channel, isAdmin, nickname, name, isGuideAccess]
  );

  return {
    token,
    uId,
    teamCode,
    channel,
    isAdmin,
    nickname,
    name,
    isGuideAccess,
    isUserData,
    selectKey,
    tutorialKey,
    emotionKey,
    optVal,
    optText,
    feedbackKey,
  };
}
