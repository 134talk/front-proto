import { Profile } from 'components';
import { CHECK_ICON } from 'shared/constants/icons';
import { styled } from 'styled-components';

interface UserListProps {
  isCheck: boolean;
  scale: 'small' | 'medium' | 'large';
}

export default function UserList({ isCheck, scale }: UserListProps) {
  return (
    <Container scale={scale}>
      {userLists.map((item: UserListType) => (
        <div className="user_wrapper" key={item.id}>
          {isCheck && (
            <img className="check_image" src={CHECK_ICON} alt="check" />
          )}
          <Profile
            nickname={item.nickname}
            name={item.name}
            userId={item.userId}
            scale={scale}
          />
        </div>
      ))}
    </Container>
  );
}

const Container = styled.div<{ scale: 'small' | 'medium' | 'large' }>`
display: flex;
flex-direction: column;
gap: 0.125rem;
padding: 1rem 0 0 2rem;
height: ${props => (props.scale === 'small' ? '17.125rem' : '22.75rem')};
div {
    &.user_wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 0.5rem 0;
        gap: 0.5rem;
        img {
          &.check_image {
            width: 1rem;
            height: 1rem;
          }
        }
}
`;

export type UserListType = {
  id: number;
  name: string;
  nickname: string;
  userId?: string;
};

export const userLists: UserListType[] = [
  {
    id: 0,
    name: '조해솔',
    nickname: '들썩이는 매의 일격',
    userId: 'adlkjfa',
  },
  {
    id: 1,
    name: '이담',
    nickname: '들썩이는 나무의 날개짓',
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
