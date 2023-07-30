import axiosInstance from './instance';

export const login = (code: string) =>
  axiosInstance.get(`/auth/kakao/callback?code=${code}`);

export const silentRefresh = () => axiosInstance.post('/auth/refresh');

export const signUser = (uid: string, name: string, tId: string) =>
  axiosInstance.post(`/users/${uid}/register/guest`, {
    name: name,
    team_code: tId,
  });

export const signAdmin = (uid: string, name: string, tName: string) =>
  axiosInstance.post(`/users/${uid}/register/editor`, {
    name: name,
    team_name: tName,
  });

export const updateNickname = (uId: string, nameCode: number[]) =>
  axiosInstance.put(`/users/${uId}/nickname`, {
    emotion_code: nameCode[0],
    action_code: nameCode[1],
    state_code: nameCode[2],
  });

export const getProfile = (uId: string) =>
  axiosInstance.get(`/user/${uId}/profile`);

export const logout = () => axiosInstance.post('user/logout');
