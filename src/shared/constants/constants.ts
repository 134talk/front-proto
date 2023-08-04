import {
  EMOTION_ANGRY,
  EMOTION_HUG,
  EMOTION_LIKE,
  EMOTION_LOVE,
  EMOTION_RIGHT,
  EMOTION_SAD,
} from './icons';
import {
  ACTION1,
  ACTION2,
  ACTION3,
  ACTION4,
  ACTION5,
  EMOTION1,
  EMOTION2,
  EMOTION3,
  EMOTION4,
  EMOTION5,
  STATE1,
  STATE2,
  STATE3,
  STATE4,
  STATE5,
} from './reportImgs';

export const KAKAO_OAUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;

export const NAME_REGEX = /^[가-힣]{2,20}$/;

export const MOOD_OPTIONS = [
  { id: 1, option: '희망이 조금씩 생기는' },
  { id: 2, option: '점차 걱정이 생기는' },
  { id: 3, option: '속이 타는 마음' },
  { id: 4, option: '정신없이 요동치는' },
  { id: 5, option: '고요하고 감사한' },
];

export const PERSONALITY_OPTIONS = [
  { id: 1, option: '경청을 잘하고 의견을 조율하는' },
  { id: 2, option: '열정적인 목표 달성과 리더십' },
  { id: 3, option: '치밀한 계획과 효율이 중요한' },
  { id: 4, option: '힘을 빼고 유쾌하게 목표 달성' },
  { id: 5, option: '고요하게 반격을 준비하는' },
];

export const STATUS_OPTIONS = [
  { id: 1, option: '배움과 성장' },
  { id: 2, option: '휴식과 여행' },
  { id: 3, option: '공감과 평화' },
  { id: 4, option: '성과달성과 보상받기' },
  { id: 5, option: '변화와 해결' },
];

export const KEYWORD_LIST = [
  { id: 1, color: ['#F3B8FF', '#C290F1', '#A56ADD'], keyword: '일상' },
  { id: 2, color: ['#CAF8D3', '#93D39E', '#6DBB7C'], keyword: '관계' },
  { id: 3, color: ['#FFD9C0', '#F8A07B', '#F18455'], keyword: '나' },
  { id: 4, color: ['#7F8EC5', '#6568A5', '#43467C'], keyword: '휴식' },
  { id: 5, color: ['#F0EEBE', '#ABCF7B', '#9BC168'], keyword: '미래/성장' },
  { id: 6, color: ['#DCFFCB', '#69D2DE', '#02C7DE'], keyword: '여행' },
  { id: 7, color: ['#C1DCFF', '#78A8F5', '#457ACF'], keyword: '팀' },
  { id: 8, color: ['#F5F2AC', '#4888A5', '#266C8B'], keyword: '커리어' },
  { id: 9, color: ['#FFC6D6', '#FF8FA4', '#F2647D'], keyword: '사랑' },
  { id: 10, color: ['#FFBEDB', '#DDA2A7', '#CC737A'], keyword: '일' },
];

export const EMOTION_LIST = [
  { id: 1, emotion: 'Love', source: EMOTION_LOVE },
  { id: 2, emotion: 'Like', source: EMOTION_LIKE },
  { id: 3, emotion: 'Hug', source: EMOTION_HUG },
  { id: 4, emotion: 'Sad', source: EMOTION_SAD },
  { id: 5, emotion: "You're Right", source: EMOTION_RIGHT },
  { id: 6, emotion: 'Angry', source: EMOTION_ANGRY },
];

export const FEED_OPTION_SELECT = [
  { id: 1, label: '몰랐던 면을 알게 됬어요.' },
  { id: 2, label: '또 이야기 나눠요.' },
  { id: 3, label: '오늘 좋았습니다.' },
  { id: 4, label: '역시 반가웠습니다.' },
  { id: 5, label: '더 친해져요.' },
  { id: 6, label: '직접 글쓰기' },
];

export const FEED_QUESTION_LIST = [
  { id: 3, question: '오늘 나의 에너지레벨은 어떻게 변했나요?' },
  { id: 4, question: '오늘 다른 사람에 대해서 얼마나 더 이해하게 되었나요?' },
  { id: 5, question: '오늘 나의 심리적 안정감은 어떻게 변했나요?' },
  { id: 6, question: '오늘 스트레스 수치는 어떻게 변했나요?' },
];

export const FEED_STATUS: { [key: string]: string } = {
  '3': 'energy',
  '4': 'relation',
  '5': 'stable',
  '6': 'stress',
};

type Mappings = {
  [key: string]: {
    img: string;
  };
};

export const EMOTION_MAPPINGS: Mappings = {
  Love: { img: EMOTION_LOVE },
  Like: { img: EMOTION_LIKE },
  Hug: { img: EMOTION_HUG },
  Sad: { img: EMOTION_SAD },
  "You're right": { img: EMOTION_RIGHT },
  Angry: { img: EMOTION_ANGRY },
};

interface Routes {
  [type: string]: {
    nextType: string;
    nextRoute: string;
    prevRoute: string;
  };
}

export const ROUTES: Routes = {
  mood: {
    nextType: 'personality',
    nextRoute: '/nickname/personality',
    prevRoute: '/nickname/guide',
  },
  personality: {
    nextType: 'status',
    nextRoute: '/nickname/status',
    prevRoute: '/nickname/mood',
  },
  status: {
    nextType: '',
    nextRoute: '/nickname/result',
    prevRoute: '/nickname/personality',
  },
};

export const KEYWORD_NAME_LIST = [
  '일상',
  '관계',
  '나',
  '휴식',
  '미래/성장',
  '여행',
  '팀',
  '커리어',
  '사랑',
  '일',
];

export const NICKNAME_LIST = [
  [
    { id: 1, value: '희망이 조금씩 생기는' },
    { id: 2, value: '점차 걱정이 생기는' },
    { id: 3, value: '속이 타는 마음' },
    { id: 4, value: '정신없이 요동치는' },
    { id: 5, value: '고요하고 감사한' },
  ],
  [
    { id: 1, value: '경청을 잘하고, 의견을 조율하는 ' },
    { id: 2, value: '열정적인 목표 달성과 리더십' },
    { id: 3, value: '치밀한 계획과 효율이 중요한' },
    { id: 4, value: '힘을 빼고, 유쾌하게 목표 달성' },
    { id: 5, value: '고요하게, 반격을 준비하는 ' },
  ],
  [
    { id: 1, value: '배움/성장' },
    { id: 2, value: '휴식/여행' },
    { id: 3, value: '공감/평화' },
    { id: 4, value: '성과달성/보상받기' },
    { id: 5, value: '변화/해결' },
  ],
];

type ReportMappings = {
  [key: string]: {
    img: string;
    color: string;
  };
};

export const REPORT_MAPPINGS: ReportMappings = {
  '희망이 조금씩 생기는': { img: EMOTION1, color: '#FFA52C' },
  '점차 걱정이 생기는': { img: EMOTION2, color: '#5478FF' },
  '속이 타는 마음': { img: EMOTION3, color: '#D45252' },
  '정신없이 요동치는': { img: EMOTION4, color: '#5499DF' },
  '고요하고 감사한': { img: EMOTION5, color: '#B8B1CE' },
  '경청을 잘하고, 의견을 조율하는': { img: ACTION1, color: '#7CC67E' },
  '열정적인 목표 달성과 리더십': { img: ACTION2, color: '#FEA86A' },
  '치밀한 계획과 효율이 중요한': { img: ACTION3, color: '#D3A6EB' },
  '힘을 빼고, 유쾌하게 목표 달성': { img: ACTION4, color: '#7CC0FF' },
  '고요하게, 반격을 준비하는': { img: ACTION5, color: '#82B9C7' },
  '배움/성장': { img: STATE1, color: '#9EDEEA' },
  '휴식/여행': { img: STATE2, color: '#7F6BC1' },
  '공감/평화': { img: STATE3, color: '#DFDC6C' },
  '성과달성/보상받기': { img: STATE4, color: '#DBAB44' },
  '변화/해결': { img: STATE5, color: '#F65656' },
  일상: { img: '⌛️', color: '#C290F1' },
  관계: { img: '👩‍❤️‍👨‍‍', color: '#6568A5' },
  나: { img: '😀', color: '#F8A07B' },
  휴식: { img: '🏖‍‍', color: '#78A8F5' },
  '미래/성장': { img: '🧭‍‍', color: '#69D2DE' },
  여행: { img: '✈️‍‍', color: '#ABCF7B' },
  팀: { img: '🍀‍‍', color: '#DDA2A7' },
  커리어: { img: '👞‍‍', color: '#93D29F' },
  사랑: { img: '❤️‍‍', color: '#FF8FA4' },
  일: { img: '👔', color: '#4888A5' },
  Love: { img: EMOTION_LOVE, color: '#FF498B' },
  Like: { img: EMOTION_LIKE, color: '#7499F9' },
  Hug: { img: EMOTION_HUG, color: '#FBC829' },
  Sad: { img: EMOTION_SAD, color: '#84D29F' },
  "You're right": { img: EMOTION_RIGHT, color: '#7DCFF2' },
  Angry: { img: EMOTION_ANGRY, color: '#FF783F' },
};
