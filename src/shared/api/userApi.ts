import axiosInstance from './instance';

export const login = (code: string) =>
  axiosInstance.post('/auth/login/kakao', {
    code: code,
    redirectUri: process.env.REACT_APP_KAKAO_REDIRECT_URI,
  });

export const silentRefresh = (accessToken: string, refreshToken: string) =>
  axiosInstance.post('/auth/refresh', {
    accessToken: accessToken,
    refreshToken: refreshToken,
  });

export const signUser = (name: string, channel: string) =>
  axiosInstance.post('/user/register', {
    name: name,
    teamCode: channel,
  });

export const signAdmin = (name: string, team: string) =>
  axiosInstance.post('/user/admin/register', {
    name: name,
    teamName: team,
  });

// 이름 조회
// 닉네임 등록
// 닉네임 수정
// 유저 프로필 조회
// 로그아웃
