export const KAKAO_OAUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;

export const NAME_REGEX = /^[가-힣]{2,20}$/;

export const MOOD_OPTIONS = [
  {
    id: 1,
    option: '희망이 조금씩 생기는',
  },
  {
    id: 2,
    option: '점차 걱정이 생기는',
  },
  {
    id: 3,
    option: '속이 타는 마음',
  },
  {
    id: 4,
    option: '정신없이 요동치는',
  },
  {
    id: 5,
    option: '고요하고 감사한',
  },
];

export const PERSONALITY_OPTIONS = [
  {
    id: 1,
    option: '경청을 잘하고 전체 의견을 조율하는',
  },
  {
    id: 2,
    option: '열정적인 목표 달성과 리더십',
  },
  {
    id: 3,
    option: '나름의 계획과 효율이 중요한',
  },
  {
    id: 4,
    option: '힘을 빼고 유쾌하게 평균 이상',
  },
  {
    id: 5,
    option: '고요하게 반격을 준비하는',
  },
];

export const STATUS_OPTIONS = [
  {
    id: 1,
    option: '배움과 성장',
  },
  {
    id: 2,
    option: '휴식과 여행',
  },
  {
    id: 3,
    option: '공감과 평화',
  },
  {
    id: 4,
    option: '성과달성과 보상받기',
  },
  {
    id: 5,
    option: '변화와 해결',
  },
];
