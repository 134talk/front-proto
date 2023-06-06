import axiosInstance from './instance';
// 참가자 조회
// 대화 목록 조회
// 대화 목록 검색
export const setTimer = (timeout: string) =>
  axiosInstance.put(`/user/update-timeout/${timeout}`);
// 대화 생성
// 키워드 선택
// 질문 순서 등록
