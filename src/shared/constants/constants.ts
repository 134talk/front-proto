import {
  EMOTION_ANGRY,
  EMOTION_HUG,
  EMOTION_LIKE,
  EMOTION_LOVE,
  EMOTION_RIGHT,
  EMOTION_SAD,
} from './icons';

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
    option: '경청을 잘하고 의견을 조율하는',
  },
  {
    id: 2,
    option: '열정적인 목표 달성과 리더십',
  },
  {
    id: 3,
    option: '치밀한 계획과 효율이 중요한',
  },
  {
    id: 4,
    option: '힘을 빼고 유쾌하게 목표 달성',
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

export const KEYWORD_LIST = [
  { id: 1, color: ['#F3B8FF', '#C290F1', '#A56ADD'], keyword: '일상' },
  { id: 2, color: ['#CAF8D3', '#93D39E', '#6DBB7C'], keyword: '삶' },
  { id: 3, color: ['#FFD9C0', '#F8A07B', '#F18455'], keyword: '나' },
  { id: 4, color: ['#7F8EC5', '#6568A5', '#43467C'], keyword: '관계' },
  { id: 5, color: ['#F0EEBE', '#ABCF7B', '#9BC168'], keyword: '여행' },
  { id: 6, color: ['#FFC6D6', '#FF8FA4', '#F2647D'], keyword: '사랑' },
  { id: 7, color: ['#C1DCFF', '#78A8F5', '#457ACF'], keyword: '치유' },
  { id: 8, color: ['#F5F2AC', '#4888A5', '#266C8B'], keyword: '일' },
  { id: 9, color: ['#DCFFCB', '#69D2DE', '#02C7DE'], keyword: '미래' },
  { id: 10, color: ['#FFBEDB', '#DDA2A7', '#CC737A'], keyword: '가치' },
];

export const EMOTION_LIST = [
  { id: 0, emotion: 'love', source: EMOTION_LOVE },
  { id: 1, emotion: 'like', source: EMOTION_LIKE },
  { id: 2, emotion: 'hug', source: EMOTION_HUG },
  { id: 3, emotion: 'sad', source: EMOTION_SAD },
  { id: 4, emotion: 'right', source: EMOTION_RIGHT },
  { id: 5, emotion: 'angry', source: EMOTION_ANGRY },
];
