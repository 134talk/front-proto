import { NavBar, SearchBar } from 'components';
import Profile from 'components/common/Profile';
import type { Dispatch, SetStateAction } from 'react';
import { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components';

export default function MembersPage() {
  const [isModalOpen, setModalIsOpen] = useState(false);
  const [keyword, setKeyword] = useState('');
  //TODO: <GET 참가자 목록 조회>

  const handleModal = () => setModalIsOpen(prev => !prev);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    setKeyword(e.target.value);

  const filteredUserList = useMemo(
    () =>
      TEST_USER.filter(user => {
        if (keyword)
          return user.nickname.includes(keyword) || user.name.includes(keyword);
        return user;
      }),
    [keyword]
  );

  return (
    <Container>
      <NavBar
        isCenter={false}
        title="참가자"
        cnt={filteredUserList?.length}
        button="채널 초대"
        handleInviteModal={handleModal}
      />
      {isModalOpen && <Modal setModalIsOpen={setModalIsOpen} />}
      <SearchBar handleSearch={handleSearch} />
      <section>
        {filteredUserList.map(({ userId, nickname, name }) => (
          <div key={userId}>
            <Profile nickname={nickname} name={name} />
          </div>
        ))}
      </section>
    </Container>
  );
}

const Container = styled.div`
  > section {
    width: 100%;
    height: calc(100% - 16.125rem);
    margin-top: 2rem;
    padding-bottom: 3rem;
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 1.125rem;
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const TEST_USER = [
  {
    userId: '1',
    nickname: '떠오르는 매의 날갯짓',
    name: '이정은',
    profileUrl:
      'https://www.iprcenter.gov/image-repository/blank-profile-picture.png/@@images/image.png',
  },
  {
    userId: '2',
    nickname: '떠오르는 매의 날갯짓',
    name: '차정원',
    profileUrl:
      'https://www.iprcenter.gov/image-repository/blank-profile-picture.png/@@images/image.png',
  },
  {
    userId: '3',
    nickname: '떠오르는 매의 날갯짓',
    name: '김성남',
    profileUrl:
      'https://www.iprcenter.gov/image-repository/blank-profile-picture.png/@@images/image.png',
  },
  {
    userId: '4',
    nickname: '떠오르는 매의 날갯짓',
    name: '김수진',
    profileUrl:
      'https://www.iprcenter.gov/image-repository/blank-profile-picture.png/@@images/image.png',
  },
  {
    userId: '5',
    nickname: '떠오르는 매의 날갯짓',
    name: '고지섭',
    profileUrl:
      'https://www.iprcenter.gov/image-repository/blank-profile-picture.png/@@images/image.png',
  },
  {
    userId: '6',
    nickname: '떠오르는 매의 날갯짓',
    name: '여민구',
    profileUrl:
      'https://www.iprcenter.gov/image-repository/blank-profile-picture.png/@@images/image.png',
  },
  {
    userId: '7',
    nickname: '떠오르는 매의 날갯짓',
    name: '서도원',
    profileUrl:
      'https://www.iprcenter.gov/image-repository/blank-profile-picture.png/@@images/image.png',
  },
  {
    userId: '8',
    nickname: '떠오르는 매의 날갯짓',
    name: '최창식',
    profileUrl:
      'https://www.iprcenter.gov/image-repository/blank-profile-picture.png/@@images/image.png',
  },
  {
    userId: '9',
    nickname: '떠오르는 매의 날갯짓',
    name: '이민재',
    profileUrl:
      'https://www.iprcenter.gov/image-repository/blank-profile-picture.png/@@images/image.png',
  },
];

type Props = {
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
};

function Modal({ setModalIsOpen }: Props) {
  const location = useLocation();
  const handleClose = () => setModalIsOpen(false);

  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('클립보드에 링크가 복사되었어요.');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button onClick={handleClose}>닫기</button>
      <button>카카오톡 친구 목록에서 초대</button>
      <button
        onClick={() =>
          handleCopyClipBoard(
            `${process.env.REACT_APP_BASE_URL}/login?channel=${location.pathname}`
          )
        }
      >
        링크 복사
      </button>
    </div>
  );
}
