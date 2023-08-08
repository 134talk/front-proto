import { AddToHomeScreen, InstallModal } from 'components';
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
  const channelId = searchParams.get('channel');
  const installModal = useModal();

  useEffect(() => {
    localStorage.setItem('invite-code', channelId);
    return () => localStorage.removeItem('invite-code');
  }, [channelId]);

  useEffect(() => {
    sessionStorage.removeItem('token');
    localStorage.removeItem('uid');
    localStorage.removeItem('channel');
    localStorage.removeItem('teamCode');
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('nickname');
    localStorage.removeItem('name');
    localStorage.removeItem('isGuideAccess');
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
          <AddToHomeScreen onLogin={onLogin} onOpen={installModal.open} />
        ) : (
          <KakaoButton onClick={onLogin} />
        )}
      </t.Container>
    </>
  );
}
