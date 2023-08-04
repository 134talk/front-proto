import {
  FeedOptionCheck,
  FeedOptionReminder,
  FeedRequirement,
  NavBar,
  ProgressBar,
} from 'components';
import { useNavigate, useParams } from 'react-router-dom';
import { styled } from 'styled-components';

export default function FeedbackPage() {
  const { type, roomId, chatUserId } = useParams();
  const navigate = useNavigate();

  return (
    <Container>
      {type === '1' || type === '3' ? (
        <NavBar isCenter={true} title="대화는 어떠셨나요?" />
      ) : (
        <NavBar
          isCenter={true}
          isNav={true}
          title="대화는 어떠셨나요?"
          handleNav={() =>
            navigate(`/feedback/${Number(type) - 1}/${roomId}/${chatUserId}`)
          }
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
