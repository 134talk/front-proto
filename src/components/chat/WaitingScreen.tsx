import { ExitConfirmModal, NavBar } from 'components';
import { useState } from 'react';
import { Tooltip } from 'react-tooltip';
import { SHADOW_IMAGE } from 'shared/constants/icons';
import { styled } from 'styled-components';
import { Button, ProfileImg, Spinner } from 'ui';
import { userLists } from './UserList';

export default function WaitingScreen() {
  const [isCheck, setIsCheck] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleCheckIn = () => {
    setIsCheck(true);
  };

  return (
    <>
      <ExitConfirmModal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Container>
        <NavBar isCenter={true} title="대화방" isNav={true} />
        <div className="user_wrapper">
          <div className="list_wrapper">
            {userLists.map(item => (
              <>
                <ProfileImg
                  size="4rem"
                  key={item.id}
                  data-tooltip-id={String(item.id)}
                />
                <Tooltip
                  className="tooltip"
                  id={String(item.id)}
                  place="bottom"
                  content={`${item.nickname}(${item.name})`}
                />
              </>
            ))}
          </div>
          <img className="shadow_image" src={SHADOW_IMAGE} alt="shadow" />
        </div>
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
          <Button
            category="cancel"
            text="대화 나가기"
            onClick={() => setIsModalOpen(true)}
          />
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  div {
    &.user_wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 7rem;
      gap: 1rem;
    }
    &.list_wrapper {
      width: 14rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      column-gap: 1rem;
      row-gap: 0.5rem;
    }
    &.tooltip {
      background-color: white;
      color: #000;
      border-radius: 20px;
      border: 1px solid #f4f6f9;
      box-shadow: 3px 4px 6px 0 rgba(138, 138, 138, 0.2);
      width: 6rem;
      height: 2.8rem;
      padding: 0.5rem;
      text-align: center;
      font-size: 0.75rem;
    }
    &.waiting_wrapper {
      display: flex;
      justify-content: center;
      margin-bottom: 0.875rem;
      gap: 0.375rem;
    }
    &.button_wrapper {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 0.75rem 0;
    }
  }
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
  img {
    &.shadow_image {
      width: 14rem;
    }
  }
`;
