import { useEffect, useState } from 'react';
import {
  ANGRY,
  C01,
  C02,
  C03,
  C04,
  C05,
  C06,
  C07,
  C08,
  C09,
  C10,
  HUG,
  LIKE,
  LOVE,
  M01,
  M02,
  M03,
  M04,
  M05,
  P01,
  P02,
  P03,
  P04,
  P05,
  RIGHT,
  S01,
  S02,
  S03,
  S04,
  S05,
  SAD,
} from 'shared/constants/reportImgs';
import * as t from './barChart.style';

type Props = {
  text: string;
  value: number;
};

export default function BarChart({ text, value }: Props) {
  const [selectedImg, setSelectedImg] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  useEffect(() => {
    if (REPORT_MAPPINGS.hasOwnProperty(text)) {
      const { img, color } = REPORT_MAPPINGS[text];
      setSelectedImg(img);
      setSelectedColor(color);
    }
  }, [text]);

  return (
    <t.Container>
      {selectedImg && <img src={selectedImg} alt="아이콘" />}
      <div className="wrapper">
        <div className="textWrapper">
          <p>{text}</p>
          <p>{value}%</p>
        </div>
        <t.Bar>
          <t.Percent value={value} color={selectedColor} />
        </t.Bar>
      </div>
    </t.Container>
  );
}

type Mappings = {
  [key: string]: {
    img: string;
    color: string;
    code?: number;
  };
};

export const REPORT_MAPPINGS: Mappings = {
  '희망이 조금씩 생기는': { img: M01, color: 'FFA52C' },
  '점차 걱정이 생기는': { img: M02, color: '5478FF' },
  '속이 타는 마음': { img: M03, color: 'D45252' },
  '정신없이 요동치는': { img: M04, color: '5499DF' },
  '고요하고 감사한': { img: M05, color: 'B8B1CE' },
  '경청을 잘하고, 의견을 조율하는': { img: P01, color: '7CC67E' },
  '열정적인 목표 달성과 리더십': { img: P02, color: 'FEA86A' },
  '치밀한 계획과 효율이 중요한': { img: P03, color: 'D3A6EB' },
  '힘을 빼고, 유쾌하게 목표 달성': { img: P04, color: '7CC0FF' },
  '고요하게, 반격을 준비하는': { img: P05, color: '82B9C7' },
  '배움/성장': { img: S01, color: '9EDEEA' },
  '휴식/여행': { img: S02, color: '7F6BC1' },
  '공감/평화': { img: S03, color: 'DFDC6C' },
  '성과달성/보상받기': { img: S04, color: 'DBAB44' },
  '변화/해결': { img: S05, color: 'F65656' },
  일상: { img: C04, color: 'C290F1', code: 1 },
  관계: { img: C03, color: '6568A5', code: 2 },
  나: { img: C02, color: 'F8A07B', code: 3 },
  휴식: { img: C05, color: '78A8F5', code: 4 },
  '미래/성장': { img: C06, color: '69D2DE', code: 5 },
  여행: { img: C07, color: 'ABCF7B', code: 6 },
  팀: { img: C09, color: 'DDA2A7', code: 7 },
  커리어: { img: C10, color: '93D29F', code: 8 },
  사랑: { img: C08, color: 'FF8FA4', code: 9 },
  일: { img: C01, color: '4888A5', code: 10 },
  Love: { img: LOVE, color: 'FF498B' },
  Like: { img: LIKE, color: '7499F9' },
  Hug: { img: HUG, color: 'FBC829' },
  Sad: { img: SAD, color: '84D29F' },
  Right: { img: RIGHT, color: '7DCFF2' },
  Angry: { img: ANGRY, color: 'FF783F' },
};
