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
import { styled } from 'styled-components';

export default function BottomTab() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const tab = searchParams.get('tab');

  return (
    <Container>
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
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 5.625rem;
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  box-shadow: 0 -2px 6px 0 rgba(172, 173, 177, 0.1);
  padding: 0 1.25rem;
  text-align: center;
  box-sizing: border-box;
  color: white;

  ::before {
    width: 100%;
    height: 1px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    background-color: #2a2245;
  }
  button {
    width: 5.234rem;
    height: 3.5rem;
    background: none;
    font-size: 0.75rem;
    font-weight: 700;
    color: #000000;
  }
`;
