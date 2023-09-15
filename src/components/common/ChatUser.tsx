import { CHECK_ICON } from 'shared/constants/icons';
import useUserData from 'shared/hooks/useUserData';
import { useAppSelector } from 'shared/store/store';
import { ProfileImg } from 'ui';
import * as t from './chatUser.style';

interface ChatUserProps {
  onClick: (nickname: string, id: number) => void;
  sendTo: { nickname: string; userId: number } | null;
}

export default function ChatUser({ onClick, sendTo }: ChatUserProps) {
  const { uId } = useUserData();
  const userList = useAppSelector(state => state.chat?.recQuestion?.user_info);
  const chatUserList = userList?.filter(el => el.id !== Number(uId));
  return (
    <t.Container>
      {chatUserList?.map(user => (
        <div className="user_wrapper">
          <div className="user_image_wrapper" key={user.id}>
            <ProfileImg
              size="3rem"
              image={user.profile_image_url}
              onClick={() => onClick(user.nickname, user.id)}
            />
            {sendTo && sendTo.nickname.includes(user.nickname) && (
              <img className="check_image" src={CHECK_ICON} alt="check" />
            )}
          </div>
          <p className="user_name_text">{user.name}</p>
        </div>
      ))}
    </t.Container>
  );
}
