import { Profile } from 'components';
import type { UserInfo } from 'shared/store/chatSlice';
import * as t from './userList.style';

interface UserListProps {
  userInfo: UserInfo[];
  $isRow: boolean;
  scale?: 'small' | 'medium' | 'large';
}

export default function UserList({ userInfo, $isRow, scale }: UserListProps) {
  return (
    <t.Container $isRow={$isRow}>
      {userInfo?.map(item => (
        <div key={item.id}>
          <Profile
            userId={item.id}
            nickname={item.nickname}
            name={item.name}
            image={item.profile_image_url}
            scale={$isRow ? 'small' : scale}
            $isRow={$isRow}
          />
        </div>
      ))}
    </t.Container>
  );
}
