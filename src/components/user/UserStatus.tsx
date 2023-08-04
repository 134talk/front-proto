import { useMemo } from 'react';
import { NICKNAME_LIST } from 'shared/constants/constants';
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
