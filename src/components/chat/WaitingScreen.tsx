<<<<<<< HEAD
import { NavBar, UserList } from 'components';
import { useState } from 'react';
import { styled } from 'styled-components';
import { Button, Spinner } from 'ui';

export default function WaitingScreen() {
  const [isCheck, setIsCheck] = useState<boolean>(false);
  const handleCheckIn = () => {
    setIsCheck(true);
  };
=======
import Profile from 'components/common/Profile';
import React, { useState } from 'react';
import { CHECK_ICON, LEFT_ARROW_ICON } from 'shared/constants/icons';
import { styled } from 'styled-components';

import Spinner from 'ui/Spinner';

export default function WaitingScreen() {
  const [isCheck, setIsCheck] = useState<boolean>(true);
  console.log('setIsCheck: ', setIsCheck);

>>>>>>> main
  return (
    <Container>
      <div className="navbar">
        <NavBar isCenter={true} title="대화방" isNav={true} />
      </div>
      <div className="userList_wrapper">
        {userLists.map((item: UserList) => (
          <div className="user_wrapper">
            {isCheck && (
              <img className="check_image" src={CHECK_ICON} alt="checkIcon" />
            )}
            <Profile
              nickname={item.nickname}
              name={item.name}
              userId={item.userId}
              size="2rem"
              fsNick="0.875rem"
              fsName="0.75rem"
              fsBadge="0.75rem"
              mgrNick="0.25rem"
              mgtName="0.125rem"
            />
          </div>
        ))}
      </div>
      <Spinner isLoading={true} />
      <div className="waiting_wrapper">
        <p className="waiting_number_text">n/m</p>
        <p className="waiting_text">대기중입니다.</p>
      </div>
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  div {
    &.navbar {
<<<<<<< HEAD
      margin-bottom: 1.75rem;
=======
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 7.875rem;
      width: 100%;
      height: 3.5rem;
      margin-bottom: 2.75rem;
      img {
        width: 1.5rem;
        height: 1.5rem;
      }
      h1 {
        font-size: 1.25rem;
        line-height: 1.625rem;
      }
>>>>>>> main
    }
    &.userList_wrapper {
      display: flex;
      flex-direction: column;
      gap: 1.125rem;
      padding-left: 2rem;
      padding-bottom: 2.875rem;
    }
    &.user_wrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.5rem;
      img {
        &.check_image {
          width: 1rem;
          height: 1rem;
        }
      }
    }
    &.waiting_wrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin-top: 0.625rem;
      gap: 0.375rem;
      p {
        line-height: 1.95rem;
        font-weight: bold;
        &.waiting_number_text {
          font-size: 1.25rem;
          color: #f58548;
        }
        &.waiting_text {
          font-size: 1.5rem;
        }
      }
    }
  }
`;

type UserList = {
  id: number;
  name: string;
  nickname: string;
  userId?: string;
};

const userLists: UserList[] = [
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
