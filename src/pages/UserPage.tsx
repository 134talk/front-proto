import {
  NavBar,
  ReportMenu,
  UserBackground,
  UserProfile,
  UserStatus,
} from 'components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'ui';
import * as t from './userPage.style';

export default function UserPage() {
  const navigate = useNavigate();
  const [tab, setTab] = useState(1);
  const updateNickname = () => navigate('/nickname/guide');

  return (
    <t.Container>
      <UserBackground />
      <NavBar isCenter title="마이페이지" />
      <UserProfile />
      <div className="tabWrapper">
        <t.Tab onClick={() => setTab(1)} isSelected={tab === 1}>
          나의 정보
        </t.Tab>
        <t.Tab onClick={() => setTab(2)} isSelected={tab === 2}>
          나의 대화
        </t.Tab>
      </div>
      <div className="contentWrapper">
        {tab === 1 && (
          <>
            <UserStatus nicknameData={TEST_DATA} />
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

const TEST_DATA = [1, 2, 3];
