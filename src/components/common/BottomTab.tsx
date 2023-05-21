import { useNavigate, useSearchParams } from 'react-router-dom';
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
  const [searchParams] = useSearchParams();
  const tab = searchParams.get('tab');

  return (
    <t.Container>
      {/* FIXME: id 바꾸기 */}
      <button onClick={() => navigate('/1?tab=1')}>
        <img
          src={tab === '1' ? TAB_MEMBERS_ACTIVE : TAB_MEMBERS}
          alt="참가자"
        />
        <p>참가자</p>
      </button>
      <button onClick={() => navigate('/channel/1?tab=2')}>
        <img src={tab === '2' ? TAB_CHAT_ACTIVE : TAB_CHAT} alt="대화" />
        <p>대화</p>
      </button>
      <button onClick={() => navigate('/report/1?tab=3')}>
        <img src={tab === '3' ? TAB_REPORT_ACTIVE : TAB_REPORT} alt="리포트" />
        <p>리포트</p>
      </button>
      <button onClick={() => navigate('/user/1?tab=4')}>
        <img src={tab === '4' ? TAB_USER_ACTIVE : TAB_USER} alt="마이" />
        <p>마이</p>
      </button>
    </t.Container>
  );
}
