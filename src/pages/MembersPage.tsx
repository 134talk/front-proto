import { InviteModal, NavBar, SearchBar } from 'components';
import Profile from 'components/common/Profile';
import { useState } from 'react';
import useSearchKeyword from 'shared/hooks/useSearchKeyword';
import * as t from './membersPage.style';

export default function MembersPage() {
  const [isModalOpen, setModalIsOpen] = useState(false);

  const { handleSearch, filteredUserList } = useSearchKeyword(TEST_USER);

  const handleModal = () => setModalIsOpen(prev => !prev);

  return (
    <t.Container>
      {isModalOpen && <InviteModal onClose={handleModal} />}
      <NavBar
        isCenter={false}
        title="참가자"
        cnt={filteredUserList?.length.toString()}
        button="채널 초대"
        handleInviteModal={handleModal}
      />
      <SearchBar handleSearch={handleSearch} />
      <section>
        {filteredUserList.map(({ userId, nickname, name }) => (
          <div key={userId}>
            <Profile nickname={nickname} name={name} scale="medium" />
          </div>
        ))}
      </section>
    </t.Container>
  );
}

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

// type Props = {
//   setModalIsOpen: Dispatch<SetStateAction<boolean>>;
// };
