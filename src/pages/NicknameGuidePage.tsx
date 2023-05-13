import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NicknameGuidePage() {
  const navigate = useNavigate();

  //TODO: <GET 실명 조회>
  useEffect(() => {
    localStorage.removeItem('mood');
  }, []);

  const handleNextPage = () => navigate('/nickname/mood');

  return (
    <div>
      <p>
        원하는 일을 하며 삶을 사랑하는 대화 서비스에 오신 {NAME}님 안녕하세요.
        134에서는 {NAME}님의 대화 여행을 위해 신비한 이름을 지어드립니다. 함께
        확인해볼까요?
      </p>
      <button onClick={handleNextPage}>다음</button>
    </div>
  );
}
const NAME = '유저';
