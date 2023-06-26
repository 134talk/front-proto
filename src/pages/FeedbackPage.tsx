import {
  FeedOptionCheck,
  FeedOptionReminder,
  FeedRequirement,
  NavBar,
  ProgressBar,
} from 'components';
import { useEffect } from 'react';
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import { styled } from 'styled-components';

export default function FeedbackPage() {
  const { type } = useParams();
  const {
    state: { roomId },
  } = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    searchParams.set('roomId', roomId);
  }, []);
  return (
    <Container>
      {type === '1' ? (
        <NavBar isCenter={true} title="대화는 어떠셨나요?" />
      ) : (
        <NavBar
          isCenter={true}
          isNav={true}
          title="대화는 어떠셨나요?"
          handleNav={() => navigate(`/feedback/${Number(type) - 1}`)}
        />
      )}
      <ProgressBar type={Number(type)} />
      {type === '1' && <FeedOptionCheck />}
      {type === '2' && <FeedOptionReminder />}
      {['3', '4', '5', '6'].includes(type) && <FeedRequirement />}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
