import { InstallModal } from 'components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { KAKAO_OAUTH_URL } from 'shared/constants/constants';
import { LOGO } from 'shared/constants/icons';
import useA2hs from 'shared/hooks/useA2hs';
import useModal from 'shared/hooks/useModal';
import isMobile, { isInstalled, isIos } from 'shared/utils/deviceDetector';
import { Background, Button, KakaoButton } from 'ui';
import * as t from './loginPage.style';

export default function LogInPage() {
  const onLogin = () => (window.location.href = KAKAO_OAUTH_URL);
  const [searchParams] = useSearchParams();
  const channel = searchParams.get('channel');

  const { deferredPrompt, installApp, clearPrompt } = useA2hs();
  const isIOS = isIos();
  const installModal = useModal();
  const isIosInstalled = isInstalled();
  const [showKakaoButton, setShowKakaoButton] = useState(false);

  const handleClearPromptOnAndroid = () => {
    clearPrompt();
    setShowKakaoButton(true);
  };

  useEffect(() => {
    localStorage.setItem('invite-code', channel);
    return () => localStorage.removeItem('invite-code');
  }, [channel]);

  useEffect(() => {
    sessionStorage.removeItem('token');
  }, []);

  return (
    <>
      {installModal.isOpen && <InstallModal modalActions={installModal} />}
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
            {isIOS && !showKakaoButton && !isIosInstalled ? (
              <div>
                <Button
                  onClick={installModal.open}
                  text="편하게 앱 이용하기"
                  category="confirm"
                  bgColor="#fff"
                  color="#4059DE"
                />
                <button onClick={() => setShowKakaoButton(true)}>
                  모바일 웹 이용하기
                </button>
              </div>
            ) : deferredPrompt && !showKakaoButton ? (
              <div>
                <Button
                  onClick={installApp}
                  text="편하게 앱 이용하기"
                  category="confirm"
                  bgColor="#fff"
                  color="#4059DE"
                />
                <button onClick={handleClearPromptOnAndroid}>
                  모바일 웹 이용하기
                </button>
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
