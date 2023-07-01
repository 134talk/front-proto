import {
  ChatDetail,
  FeedbackDetail,
  MemberDetail,
  NavBar,
  StatusDetail,
} from 'components';
import { useNavigate, useSearchParams } from 'react-router-dom';
import * as t from './reportDetailPage.style';

export default function ReportDetailPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  const handleNav = () => navigate('/report');

  return (
    <>
      <NavBar isCenter isMargin title="리포트" isNav handleNav={handleNav} />
      <t.Container>
        {category === '0' && <StatusDetail />}
        {category === '1' && <ChatDetail />}
        {category === '2' && <FeedbackDetail />}
        {category === '3' && <MemberDetail />}
      </t.Container>
    </>
  );
}
