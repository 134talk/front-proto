import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { KAKAO_OAUTH_URL } from 'shared/constants/constants';
import { LOGO } from 'shared/constants/icons';
import useA2hs from 'shared/hooks/useA2hs';
import isMobile from 'shared/utils/deviceDetector';
import { Background, Button, KakaoButton } from 'ui';
import * as t from './loginPage.style';

export default function LogInPage() {
  const onLogin = () => (window.location.href = KAKAO_OAUTH_URL);
  const [searchParams] = useSearchParams();
  const channel = searchParams.get('channel');
  const { deferredPrompt, installApp, clearPrompt } = useA2hs();

  useEffect(() => {
    localStorage.setItem('invite-code', channel);
    return () => localStorage.removeItem('invite-code');
  }, [channel]);

  useEffect(() => {
    sessionStorage.removeItem('token');
  }, []);

  return (
    <>
      <Background />
      <t.Container>
        <img src={LOGO} alt="로고" />
        <p className="bold">1 3 4</p>
        <p>
          원하는 일을 하고,
          <br />
          삶을 사랑해요.
        </p>
        {isMobile ? (
          <>
            {deferredPrompt ? (
              <div>
                <Button
                  onClick={installApp}
                  text="편하게 앱 이용하기"
                  category="confirm"
                  bgColor="#fff"
                  color="#4059DE"
                />
                <button onClick={clearPrompt}>모바일 웹 이용하기</button>
              </div>
            ) : (
              <KakaoButton onClick={onLogin} />
            )}
          </>
        ) : (
          <KakaoButton onClick={onLogin} />
        )}
      </t.Container>
    </>
  );
}
