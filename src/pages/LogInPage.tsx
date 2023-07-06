import { AddToHomeScreen, InstallModal } from 'components';
import TestLogin from 'components/TestLogin';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { KAKAO_OAUTH_URL } from 'shared/constants/constants';
import { LOGO } from 'shared/constants/icons';
import useModal from 'shared/hooks/useModal';
import isMobile from 'shared/utils/deviceDetector';
import { Background, KakaoButton } from 'ui';
import * as t from './loginPage.style';

export default function LogInPage() {
  const onLogin = () => (window.location.href = KAKAO_OAUTH_URL);
  const [searchParams] = useSearchParams();
  const channel = searchParams.get('channel');
  const installModal = useModal();

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
        <TestLogin />
        {isMobile ? (
          <AddToHomeScreen onLogin={onLogin} onOpen={installModal.open} />
        ) : (
          <KakaoButton onClick={onLogin} />
        )}
      </t.Container>
    </>
  );
}
