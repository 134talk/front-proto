import React from 'react';
import { KAKAO_OAUTH_URL } from 'shared/constants/constants';

export default function LogInPage() {
  const handleLogin = () => (window.location.href = KAKAO_OAUTH_URL);

  return (
    <div>
      <button onClick={handleLogin}>카카오 로그인</button>
    </div>
  );
}
