import { useEffect } from 'react';
import { KAKAO_OAUTH_URL } from 'shared/constants/constants';
import { LOGO } from 'shared/constants/icons';
import { Background, KakaoButton } from 'ui';
import * as t from './loginPage.style';

export default function LogInPage() {
  const onLogin = () => (window.location.href = KAKAO_OAUTH_URL);

  useEffect(() => {
    sessionStorage.removeItem('token');
  }, []);

  return (
    <t.Container>
      <Background />
      <img src={LOGO} alt="로고" />
      <p className="bold">1 3 4</p>
      <p>
        원하는 일을 하고,
        <br />
        삶을 사랑해요.
      </p>
      <KakaoButton onClick={onLogin} />
    </t.Container>
  );
}
