import { KAKAO_OAUTH_URL } from 'shared/constants/constants';
import { LOGO_COLOR } from 'shared/constants/icons';
import { KakaoButton } from 'ui';
import * as t from './loginPage.style';

export default function LogInPage() {
  const handleLogin = () => (window.location.href = KAKAO_OAUTH_URL);

  return (
    <>
      <t.Container>
        <img src={LOGO_COLOR} alt={'로고'} />
        <KakaoButton onClick={handleLogin} />
      </t.Container>
    </>
  );
}
