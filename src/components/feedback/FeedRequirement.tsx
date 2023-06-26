import { StatusReminder } from 'components';
import { styled } from 'styled-components';

export default function FeedRequirement() {
  return (
    <Container>
      <div className="title_wrapper">
        <p className="title_text">
          '닉네임(본명)'님,
          <br />
          오늘 대화는 어떠셨나요?
        </p>
        <p className="sub_text">대화 후에 어떤 변화가 있었는지 알려주세요.</p>
      </div>
      <StatusReminder />
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  .title_wrapper {
    display: flex;
    flex-direction: column;
    .title_text {
      font-size: ${({ theme }) => theme.fs20};
      font-weight: ${({ theme }) => theme.fw700};
      line-height: 1.625rem;
    }
    .sub_text {
      font-size: ${({ theme }) => theme.fs14};
      font-weight: ${({ theme }) => theme.fw400};
      color: ${({ theme }) => theme.gray600};
      line-height: 1.625rem;
    }
  }
`;
