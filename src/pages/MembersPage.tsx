import { InviteModal, NavBar, Profile, SearchBar } from 'components';
import { useState } from 'react';
import useSearchKeyword from 'shared/hooks/useSearchKeyword';
import useTeam from 'shared/query/useTeam';
import * as t from './membersPage.style';

export default function MembersPage() {
  const [isModalOpen, setModalIsOpen] = useState(false);
  const { teamList } = useTeam();

  const { keyword, onDelete, handleSearch, filteredUserList } =
    useSearchKeyword(teamList);

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
      <SearchBar
        keyword={keyword}
        handleSearch={handleSearch}
        onDelete={onDelete}
      />
      <section>
        {filteredUserList?.length ? (
          <>
            {filteredUserList.map(({ userId, nickname, name, profileUrl }) => (
              <div key={userId}>
                <Profile
                  userId={userId}
                  nickname={nickname}
                  name={name}
                  scale="medium"
                  image={profileUrl}
                />
              </div>
            ))}
          </>
        ) : (
          <p className="notFound">검색 결과가 없습니다.</p>
        )}
      </section>
    </t.Container>
  );
}
