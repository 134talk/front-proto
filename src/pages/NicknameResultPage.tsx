import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useUserData from 'shared/hooks/useUserData';
import useNickname from 'shared/query/useNickname';
import { Button, ProfileImg } from 'ui';
import * as t from './nicknameResultPage.style';

export default function NicknameResultPage() {
  const navigate = useNavigate();
  const handleConfirm = () => navigate('/channel');

  const { uId } = useUserData();

  const [mood] = useState(() => localStorage.getItem('mood'));
  const [personality] = useState(() => localStorage.getItem('personality'));
  const [status] = useState(() => localStorage.getItem('status'));

  const { mutate, nickname, profile } = useNickname();

  useEffect(() => {
    mutate({ uId: uId, code: [mood, personality, status] });
  }, [mutate, mood, personality, status, uId]);

  return (
    <t.Container>
      <p>
        당신의
        <br />
        인디언 이름을 알려드립니다.
      </p>
      <ProfileImg size="13.875rem" image={profile} />
      <p>
        <span>{nickname}</span> <br />
      </p>
      <Button text="확인" category="confirm" onClick={handleConfirm} />
    </t.Container>
  );
}
