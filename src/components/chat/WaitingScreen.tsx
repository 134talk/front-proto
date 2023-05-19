import { useState } from 'react';
import { LEFT_ARROW_ICON } from 'shared/constants/icons';
import { styled } from 'styled-components';
import { Button } from 'ui';
import Spinner from 'ui/Spinner';
import UserList from './UserList';

export default function WaitingScreen() {
  const [isCheck, setIsCheck] = useState<boolean>(false);

  const handleCheckIn = () => {
    setIsCheck(true);
  };

  return (
    <Container>
      <div className="navbar">
        <img src={LEFT_ARROW_ICON} alt="leftArrowIcon" />
        <h1>대화방</h1>
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
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 7.875rem;
      width: 100%;
      height: 3.5rem;
      margin-bottom: 1.75rem;
      img {
        width: 1.5rem;
        height: 1.5rem;
      }
      h1 {
        font-size: 1.25rem;
        line-height: 1.625rem;
      }
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
