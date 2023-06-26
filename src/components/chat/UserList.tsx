import { Profile } from 'components';
import { CHECK_ICON } from 'shared/constants/icons';
import type { ChatUserInfo } from 'shared/store/chatSlice';
import * as t from './userList.style';

interface UserListProps {
  userInfo: ChatUserInfo[];
  $isRow: boolean;
  scale?: 'small' | 'medium' | 'large';
}

export default function UserList({ userInfo, $isRow, scale }: UserListProps) {
  return (
    <t.Container $isRow={$isRow}>
      {userInfo?.map((item: ChatUserInfo) => (
        <div key={item.userId}>
          {item.activeFlag && <img src={CHECK_ICON} alt="check" />}
          <Profile
            userId={item.userId}
            nickname={item.nickname}
            name={item.userName}
            image={item.profileUrl}
            isCheck={item.activeFlag}
            scale={$isRow ? 'small' : scale}
            $isRow={$isRow}
          />
        </div>
      ))}
    </t.Container>
  );
}

export const userLists = [
  {
    userId: 11,
    userName: '조해솔',
    nickname: '들썩이는 매의 일격',
    profileUrl: 'temp',
    activeFlag: true,
    socketFlag: 0,
  },
  {
    userId: 12,
    userName: '이담',
    nickname: '들썩이는 나무의 날개짓',
    profileUrl: 'temp',
    activeFlag: true,
    socketFlag: 0,
  },
  {
    userId: 13,
    userName: '담담',
    nickname: '들썩이는 매의 일격',
    profileUrl: 'temp',
    activeFlag: true,
    socketFlag: 0,
  },
  {
    userId: 14,
    userName: '롤롤',
    nickname: '들썩이는 매의 일격',
    profileUrl: 'temp',
    activeFlag: true,
    socketFlag: 0,
  },
  {
    userId: 15,
    userName: '라라랄',
    nickname: '들썩이는 매의 일격',
    profileUrl: 'temp',
    activeFlag: true,
    socketFlag: 0,
  },
];
