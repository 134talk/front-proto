import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NicknameResultPage() {
  const navigate = useNavigate();

  const handleNavigate = () => navigate(`/rooms/${TEST_CHNNEL_ID}`);

  return (
    <div>
      이미지 + 당신의 이름은 ~입니다.
      <button onClick={handleNavigate}>확인</button>
    </div>
  );
}

//TODO: 채널 아이디 바꿔주기
const TEST_CHNNEL_ID = 1;
