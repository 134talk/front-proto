import { useEffect, useState } from 'react';
import {
  EMOTION_ANGRY,
  EMOTION_HUG,
  EMOTION_LIKE,
  EMOTION_LOVE,
  EMOTION_RIGHT,
  EMOTION_SAD,
} from 'shared/constants/icons';
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
} from 'shared/constants/reportImgs';

export default function useChartIcons(text: string) {
  const [selectedImg, setSelectedImg] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  useEffect(() => {
    if (REPORT_MAPPINGS.hasOwnProperty(text)) {
      const { img, color } = REPORT_MAPPINGS[text];
      setSelectedImg(img);
      setSelectedColor(color);
    }
  }, [text]);

  return { selectedImg, selectedColor };
}

type Mappings = {
  [key: string]: {
    img: string;
    color: string;
  };
};

const REPORT_MAPPINGS: Mappings = {
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
  Right: { img: EMOTION_RIGHT, color: '#7DCFF2' },
  Angry: { img: EMOTION_ANGRY, color: '#FF783F' },
};
