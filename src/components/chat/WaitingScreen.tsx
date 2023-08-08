import { NavBar } from 'components';
import { Tooltip } from 'react-tooltip';
import { SHADOW_IMAGE } from 'shared/constants/icons';
import useUserData from 'shared/hooks/useUserData';
import type { ChatUserInfo } from 'shared/store/chatSlice';
import { useAppSelector } from 'shared/store/store';
import { ProfileImg, Spinner } from 'ui';
import * as t from './waitingScreen.style';

export default function WaitingScreen() {
  const { uId } = useUserData();
  const socketFlag = useAppSelector(
    state => state?.chat?.recChatRoom?.socket_flag
  );
  const userList = useAppSelector(state => state?.chat?.recChatRoom?.user_info);
  const activeUsers = userList?.filter(item => item.active_flag === 1);

  return (
    <t.Container>
      <NavBar isCenter={true} title="대화방" />
      <div className="user_wrapper">
        <div className="list_wrapper">
          {userList?.map((item: ChatUserInfo) => (
            <div key={item.id}>
              <ProfileImg
                size="4rem"
                $isMyProf={uId === String(item.id)}
                data-tooltip-id={item.id}
                image={item.profile_image_url}
                $isCheckIn={item.active_flag === 1 ? false : true}
              />
              <Tooltip
                className="tooltip"
                place="bottom"
                id={String(item.id)}
                content={`${item.nickname}(${item.name})`}
              />
            </div>
          ))}
        </div>
        <img src={SHADOW_IMAGE} alt="shadow" />
      </div>
      <Spinner isLoading={socketFlag === 0} />
      <div className="text_wrapper">
        <p>
          {socketFlag === 1 ? userList?.length : activeUsers?.length} /{' '}
          {userList?.length}
        </p>
        <p>대기중입니다.</p>
      </div>
    </t.Container>
  );
}
