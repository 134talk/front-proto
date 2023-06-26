import { NavBar, ReportMenu, UserProfile, UserStatus } from 'components';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useProfile from 'shared/query/useProfile';
import isMobile from 'shared/utils/deviceDetector';
import { Button, InnerBackground } from 'ui';
import * as t from './userPage.style';

export default function UserPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const tab = searchParams.get('tab');
  const updateNickname = () => navigate('/nickname/guide');

  const { profile, name, nickname, code } = useProfile();

  return (
    <t.Container>
      <InnerBackground />
      <NavBar isCenter title="마이페이지" isMargin />
      <UserProfile profile={profile} name={name} nickname={nickname} />
      <t.TabWrapper $isMobile={isMobile}>
        <t.Tab
          onClick={() => navigate('/user?tab=info')}
          $isSelected={tab === 'info'}
        >
          나의 정보
        </t.Tab>
        <t.Tab
          onClick={() => navigate('/user?tab=chat')}
          $isSelected={tab === 'chat'}
        >
          나의 대화
        </t.Tab>
      </t.TabWrapper>
      <div className="contentWrapper">
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
      </div>
    </t.Container>
  );
}
