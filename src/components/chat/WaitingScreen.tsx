import { ExitConfirmModal, NavBar } from 'components';
import { useState } from 'react';
import { Tooltip } from 'react-tooltip';
import { SHADOW_IMAGE } from 'shared/constants/icons';
import { Button, ProfileImg, Spinner } from 'ui';
import { userLists } from './UserList';
import * as t from './waitingScreen.style';

export default function WaitingScreen() {
  const [isCheck, setIsCheck] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleCheckIn = () => {
    setIsCheck(true);
  };

  return (
    <>
      <ExitConfirmModal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <t.Container>
        <NavBar isCenter={true} title="대화방" isNav={true} />
        <div className="user_wrapper">
          <div className="list_wrapper">
            {userLists.map(item => (
              <>
                <ProfileImg
                  size="4rem"
                  key={item.id}
                  isMyProf={item.userId && true}
                  data-tooltip-id={String(item.id)}
                  // change state (isCheckIn) if user checked in
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
          <img src={SHADOW_IMAGE} alt="shadow" />
        </div>
        {/* remove spinner if all users checked in */}
        <Spinner isLoading={true} />
        <div className="text_wrapper">
          <p>n/m</p>
          <p>대기중입니다.</p>
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
      </t.Container>
    </>
  );
}
