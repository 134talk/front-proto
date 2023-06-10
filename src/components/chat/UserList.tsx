import { Profile } from 'components';
import { CHECK_ICON } from 'shared/constants/icons';
import * as t from './userList.style';

interface UserListProps {
  isCheck: boolean;
  isRow: boolean;
  scale: 'small' | 'medium' | 'large';
}

export default function UserList({ isCheck, isRow, scale }: UserListProps) {
  return (
    <t.Container isRow={isRow}>
      {userLists.map((item: UserListType) => (
        <div key={item.id}>
          {isCheck && <img src={CHECK_ICON} alt="check" />}
          <Profile
            nickname={item.nickname}
            name={item.name}
            userId={item.userId}
            scale={isRow ? 'small' : scale}
            isRow={isRow}
          />
        </div>
      ))}
    </t.Container>
  );
}

export type UserListType = {
  id: number;
  name: string;
  nickname: string;
  userId?: number;
};

export const userLists: UserListType[] = [
  {
    id: 0,
    name: '조해솔',
    nickname: '들썩이는 매의 일격',
  },
  {
    id: 1,
    name: '이담',
    nickname: '들썩이는 나무의 날개짓',
    userId: 11,
  },
  {
    id: 2,
    name: '담담',
    nickname: '들썩이는 매의 일격',
  },
  {
    id: 3,
    name: '롤롤',
    nickname: '들썩이는 매의 일격',
  },
  {
    id: 4,
    name: '라라랄',
    nickname: '들썩이는 매의 일격',
  },
];
