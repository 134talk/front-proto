import { ExitConfirmModal, NavBar } from 'components';
import { Tooltip } from 'react-tooltip';
import { SHADOW_IMAGE } from 'shared/constants/icons';
import useModal from 'shared/hooks/useModal';
import useUserData from 'shared/hooks/useUserData';
import type { ChatUserInfo } from 'shared/store/chatSlice';
import { useAppSelector } from 'shared/store/store';
import { Button, ProfileImg, Spinner } from 'ui';
import * as t from './waitingScreen.style';

export default function WaitingScreen() {
  const { uid } = useUserData();
  const exitConfirmModal = useModal();
  // 소켓 fetching 데이터
  const subUserList = useAppSelector(
    state => state?.chat?.subUser?.chatroomUserInfos
  );
  const activeUsers = subUserList?.filter(item => item.activeFlag === true);
  const currentUserSocketFlag = subUserList && subUserList[0].socketFlag;

  return (
    <>
      <ExitConfirmModal modalActions={exitConfirmModal} />
      <t.Container>
        <NavBar
          isCenter={true}
          title="대화방"
          isNav={true}
          handleNav={exitConfirmModal.open}
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
                    $isCheckIn={
                      item.activeFlag || item.socketFlag === 1 ? false : true
                    }
                  />
                  <Tooltip
                    className="tooltip"
                    place="bottom"
                    id={String(item.userId)}
                    content={`${item.nickname}(${item.name})`}
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
            onClick={exitConfirmModal.open}
          />
        </div>
      </t.Container>
    </>
  );
}
