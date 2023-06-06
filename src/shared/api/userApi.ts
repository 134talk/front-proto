import axiosInstance from './instance';

export const login = (code: string) =>
  axiosInstance.post('/auth/login/kakao', {
    code,
    redirectUri: process.env.REACT_APP_KAKAO_REDIRECT_URI,
  });

export const silentRefresh = (accessToken: string, refreshToken: string) =>
  axiosInstance.post('/auth/refresh', { accessToken, refreshToken });

export const signUser = (name: string, teamCode: string) =>
  axiosInstance.post('/user/register', { name, teamCode });

export const signAdmin = (name: string, teamName: string) =>
  axiosInstance.post('/user/admin/register', { name, teamName });

export const getName = () => axiosInstance.get('/user/name');

export const signNickname = (nameCode: string) =>
  axiosInstance.post('/user/nickname', { nameCode });

export const updateNickname = (nameCode: string) =>
  axiosInstance.put('/user/nickname', { nameCode });

// 유저 프로필 조회
// 로그아웃
