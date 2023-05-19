import { NavBar, UserList } from 'components';
import { useState } from 'react';
import { styled } from 'styled-components';
import { Button, Spinner } from 'ui';

export default function WaitingScreen() {
  const [isCheck, setIsCheck] = useState<boolean>(false);

  const handleCheckIn = () => {
    setIsCheck(true);
  };

  return (
    <Container>
      <div className="navbar">
        <NavBar isCenter={true} title="대화방" isNav={true} />
      </div>
      <UserList isCheck={isCheck} scale="small" />
      <Spinner isLoading={true} />
      <div className="waiting_wrapper">
        <p className="waiting_number_text">n/m</p>
        <p className="waiting_text">대기중입니다.</p>
      </div>
      <div className="button_wrapper">
        {!isCheck && (
          <Button
            category="confirm"
            text="대화 참여하기"
            onClick={handleCheckIn}
          />
        )}
        <Button category="cancel" text="대화 나가기" />
      </div>
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  div {
    &.navbar {
      margin-bottom: 1.75rem;
    }
    &.waiting_wrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin-bottom: 0.875rem;
      gap: 0.375rem;
      p {
        line-height: 1.95rem;
        font-weight: bold;
        &.waiting_number_text {
          font-size: 1.25rem;
          color: #f58548;
        }
        &.waiting_text {
          font-size: 1.5rem;
        }
      }
    }
    &.button_wrapper {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 0.75rem 0;
    }
  }
`;
