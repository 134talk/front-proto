import { NavBar, ReportMenu, UserProfile, UserStatus } from 'components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useProfile from 'shared/query/useProfile';
import isMobile from 'shared/utils/deviceDetector';
import { Button, InnerBackground } from 'ui';
import * as t from './userPage.style';

export default function UserPage() {
  const navigate = useNavigate();
  const [tab, setTab] = useState(1);
  const updateNickname = () => navigate('/nickname/guide');

  const { profile, name, nickname, code } = useProfile();

  return (
    <t.Container>
      <InnerBackground />
      <NavBar isCenter title="마이페이지" />
      <UserProfile profile={profile} name={name} nickname={nickname} />
      <t.TabWrapper $isMobile={isMobile}>
        <t.Tab onClick={() => setTab(1)} $isSelected={tab === 1}>
          나의 정보
        </t.Tab>
        <t.Tab onClick={() => setTab(2)} $isSelected={tab === 2}>
          나의 대화
        </t.Tab>
      </t.TabWrapper>
      <div className="contentWrapper">
        {tab === 1 && (
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
        {tab === 2 && (
          <>
            <ReportMenu />
          </>
        )}
      </div>
    </t.Container>
  );
}
