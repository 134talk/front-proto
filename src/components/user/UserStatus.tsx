import { useMemo } from 'react';
import * as t from './userStatus.style';

type Props = {
  nicknameData: {
    emotion_code: number;
    action_code: number;
    state_code: number;
  };
};

export default function UserStatus({ nicknameData }: Props) {
  const { mood, personality, status } = useMemo(
    () => ({
      mood: nicknameData
        ? NICKNAME_LIST[0].find(({ id }) => id === nicknameData.emotion_code)
            .value
        : '-',
      personality: nicknameData
        ? NICKNAME_LIST[1].find(({ id }) => id === nicknameData.action_code)
            .value
        : '-',
      status: nicknameData
        ? NICKNAME_LIST[2].find(({ id }) => id === nicknameData.state_code)
            .value
        : '-',
    }),
    [nicknameData]
  );

  return (
    <t.Container>
      <section>
        <p>현재의 감정</p>
        <p>{mood}</p>
      </section>
      <section>
        <p>업무 성향</p>
        <p>{personality}</p>
      </section>
      <section>
        <p>원하는 상태</p>
        <p>{status}</p>
      </section>
    </t.Container>
  );
}

const NICKNAME_LIST = [
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
