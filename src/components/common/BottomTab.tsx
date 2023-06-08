import { useNavigate, useParams } from 'react-router-dom';
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
  const { tabId } = useParams();
  const channelId = localStorage.getItem('channel');
  const userId = localStorage.getItem('uid');

  return (
    <t.Container>
      <button onClick={() => navigate(`/channel/${channelId}/1`)}>
        <img
          src={tabId === '1' ? TAB_MEMBERS_ACTIVE : TAB_MEMBERS}
          alt="참가자"
        />
        <p>참가자</p>
      </button>
      <button onClick={() => navigate(`/chats/${channelId}/2`)}>
        <img src={tabId === '2' ? TAB_CHAT_ACTIVE : TAB_CHAT} alt="대화" />
        <p>대화</p>
      </button>
      <button onClick={() => navigate(`/report/${channelId}/3`)}>
        <img
          src={tabId === '3' ? TAB_REPORT_ACTIVE : TAB_REPORT}
          alt="리포트"
        />
        <p>리포트</p>
      </button>
      <button onClick={() => navigate(`/user/${userId}/4`)}>
        <img src={tabId === '4' ? TAB_USER_ACTIVE : TAB_USER} alt="마이" />
        <p>마이</p>
      </button>
    </t.Container>
  );
}
