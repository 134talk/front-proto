import axiosInstance from './instance';

export const login = (code: string) =>
  axiosInstance.get(`/auth/kakao/callback?code=${code}`);

export const silentRefresh = () => axiosInstance.post('/auth/refresh');

// export const signUser = (name: string, teamCode: string) =>
//   axiosInstance.post('/user/register', { name, teamCode });

export const signUser = (uid: string, name: string, tId: string) =>
  axiosInstance.post(`/users/${uid}/register/guest`, {
    name: name,
    team_code: tId,
  });

// export const signAdmin = (name: string, teamName: string) =>
//   axiosInstance.post('/user/admin/register', { name, teamName });

export const signAdmin = (uid: string, name: string, tName: string) =>
  axiosInstance.post(`/users/${uid}/register/guest`, {
    name: name,
    team_name: tName,
  });

export const getName = () => axiosInstance.get('/user/name');

export const updateNickname = (nameCode: string[]) =>
  axiosInstance.put('/user/nickname', { nameCode });

export const getProfile = () => axiosInstance.get('/user/profile');

export const logout = () => axiosInstance.post('user/logout');
