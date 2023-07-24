import { InviteModal, NavBar, Profile, SearchBar } from 'components';
import { useState } from 'react';
import useSearchKeyword from 'shared/hooks/useSearchKeyword';
import useSortedMembers from 'shared/hooks/useSortedMembers';
import isMobile from 'shared/utils/deviceDetector';
import * as t from './membersPage.style';

export default function MembersPage() {
  const [isModalOpen, setModalIsOpen] = useState(false);

  const handleModal = () => setModalIsOpen(prev => !prev);

  const members = useSortedMembers();

  const { keyword, onDelete, handleSearch, filteredUserList } =
    useSearchKeyword(members);

  return (
    <>
      <NavBar
        isMargin
        title="참가자"
        cnt={filteredUserList?.length.toString()}
        button="채널 초대"
        handleInviteModal={handleModal}
      />
      <t.Container>
        {isModalOpen && <InviteModal onClose={handleModal} />}
        <SearchBar
          keyword={keyword}
          handleSearch={handleSearch}
          onDelete={onDelete}
        />
        <t.Scroll $isMobile={isMobile}>
          {filteredUserList?.length > 0 ? (
            filteredUserList.map(({ userId, nickname, name, profileUrl }) => (
              <div key={userId}>
                <Profile
                  userId={userId}
                  nickname={nickname}
                  name={name}
                  scale="medium"
                  image={profileUrl}
                />
              </div>
            ))
          ) : (
            <p className="notFound">검색 결과가 없습니다.</p>
          )}
        </t.Scroll>
      </t.Container>
    </>
  );
}
