import { ChatDetail, FeedbackDetail, NavBar, StatusDetail } from 'components';
import { useNavigate, useParams } from 'react-router-dom';
import * as t from './reportDetailPage.style';

export default function ReportDetailPage() {
  const navigate = useNavigate();
  const { channelId, category } = useParams();

  const handleNav = () => navigate(`/report/${channelId}/3`);
  return (
    <>
      <NavBar
        isCenter={true}
        title="리포트"
        isNav={true}
        handleNav={handleNav}
      />
      <t.Container>
        {category === '0' && <StatusDetail />}
        {category === '1' && <ChatDetail />}
        {category === '2' && <FeedbackDetail />}
      </t.Container>
    </>
  );
}
