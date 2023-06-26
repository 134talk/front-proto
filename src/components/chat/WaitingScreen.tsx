import { ExitConfirmModal, NavBar } from 'components';
import { useState } from 'react';
import { Tooltip } from 'react-tooltip';
import { SHADOW_IMAGE } from 'shared/constants/icons';
import useUserData from 'shared/hooks/useUserData';
import type { ChatUserInfo } from 'shared/store/chatSlice';
import { useAppSelector } from 'shared/store/store';
import { Button, ProfileImg, Spinner } from 'ui';
import * as t from './waitingScreen.style';

export default function WaitingScreen() {
  const { uid } = useUserData();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const subUserList = useAppSelector(
    state => state?.chat?.subUser?.chatroomUserInfos
  );
  const activeUsers = subUserList?.filter(item => item.activeFlag === true);
  const currentUserSocketFlag = subUserList && subUserList[0].socketFlag;

  return (
    <>
      <ExitConfirmModal
        isOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        onConfirm={() => setIsModalOpen(false)}
      />
      <t.Container>
        <NavBar
          isCenter={true}
          title="대화방"
          isNav={true}
          handleNav={() => setIsModalOpen(true)}
        />
        <div className="user_wrapper">
          <div className="list_wrapper">
            {subUserList &&
              subUserList.map((item: ChatUserInfo) => (
                <>
                  <ProfileImg
                    size="4rem"
                    key={item.userId}
                    $isMyProf={uid === String(item.userId)}
                    data-tooltip-id={item.userId}
                    image={item.profileUrl}
                    $isCheckIn={item.activeFlag || item.socketFlag === 1}
                  />
                  <Tooltip
                    className="tooltip"
                    place="bottom"
                    id={String(item.userId)}
                    content={`${item.nickname}(${item.userName})`}
                  />
                </>
              ))}
          </div>
          <img src={SHADOW_IMAGE} alt="shadow" />
        </div>
        <Spinner isLoading={currentUserSocketFlag === 0} />
        <div className="text_wrapper">
          <p>
            {currentUserSocketFlag === 1
              ? subUserList?.length
              : activeUsers?.length}{' '}
            / {subUserList?.length}
          </p>
          <p>대기중입니다.</p>
        </div>
        <div className="button_wrapper">
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
