import { NavBar, ReportMenu, UserProfile, UserStatus } from 'components';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useProfile from 'shared/query/useProfile';
import isMobile from 'shared/utils/deviceDetector';
import { Button } from 'ui';
import * as t from './userPage.style';

export default function UserPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const tab = searchParams.get('tab');
  const updateNickname = () => navigate('/nickname/guide');

  const { profile, name, nickname, code } = useProfile();

  return (
    <t.Container>
      <NavBar isCenter title="마이페이지" isMargin />
      <UserProfile
        tab={tab}
        profile={profile}
        name={name}
        nickname={nickname}
      />
      <t.Scroll $isMobile={isMobile}>
        {tab === 'info' && (
          <>
            <UserStatus nicknameData={code} />
            <Button
              text="새로운 이름 받기"
              category="confirm"
              margin="1.75rem 0"
              onClick={updateNickname}
            />
          </>
        )}
        {tab === 'chat' && <ReportMenu />}
      </t.Scroll>
    </t.Container>
  );
}
