import { useLocation, useNavigate } from 'react-router-dom';
import {
  TAB_CHAT,
  TAB_CHAT_ACTIVE,
  TAB_MEMBERS,
  TAB_MEMBERS_ACTIVE,
  TAB_REPORT,
  TAB_REPORT_ACTIVE,
  TAB_USER,
  TAB_USER_ACTIVE,
} from 'shared/constants/icons';
import * as t from './bottomTab.style';

export default function BottomTab() {
  const navigate = useNavigate();
  let { pathname } = useLocation();

  return (
    <t.Container>
      <button onClick={() => navigate('/channel')}>
        <img
          src={pathname === '/channel' ? TAB_MEMBERS_ACTIVE : TAB_MEMBERS}
          alt="참가자"
        />
        <p>참가자</p>
      </button>
      <button onClick={() => navigate('/chats')}>
        <img
          src={pathname === '/chats' ? TAB_CHAT_ACTIVE : TAB_CHAT}
          alt="대화"
        />
        <p>대화</p>
      </button>
      <button onClick={() => navigate('/report')}>
        <img
          src={
            pathname === '/report' || pathname === '/report-detail'
              ? TAB_REPORT_ACTIVE
              : TAB_REPORT
          }
          alt="리포트"
        />
        <p>리포트</p>
      </button>
      <button onClick={() => navigate('/user')}>
        <img
          src={pathname === '/user' ? TAB_USER_ACTIVE : TAB_USER}
          alt="마이"
        />
        <p>마이</p>
      </button>
    </t.Container>
  );
}
