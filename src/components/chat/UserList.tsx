import { Profile } from 'components';
import { CHECK_ICON } from 'shared/constants/icons';
import useUserData from 'shared/hooks/useUserData';
import type { ChatUserInfo } from 'shared/store/chatSlice';
import * as t from './userList.style';

interface UserListProps {
  userInfo: ChatUserInfo[];
  $isRow: boolean;
  scale?: 'small' | 'medium' | 'large';
}

export default function UserList({ userInfo, $isRow, scale }: UserListProps) {
  const { uid } = useUserData();
  return (
    <t.Container $isRow={$isRow}>
      {userInfo?.map((item: ChatUserInfo) => (
        <div key={item.userId}>
          {item.activeFlag && <img src={CHECK_ICON} alt="check" />}
          <Profile
            userId={item.userId}
            nickname={item.nickname}
            name={item.name}
            image={item.profileUrl}
            isCheck={!item.activeFlag}
            scale={$isRow ? 'small' : scale}
            $isRow={$isRow}
            isMyProf={item.userId === Number(uid)}
          />
        </div>
      ))}
    </t.Container>
  );
}
