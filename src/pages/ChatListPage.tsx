import { ChatBox, CreateModal, NavBar, SearchBar } from 'components';
import { useState } from 'react';
import * as t from './chatListPage.style';

export default function ChatListPage() {
  const [modal, setModal] = useState(false);
  const handleCreateModal = () => setModal(prev => !prev);
  const handleSearch = () => {};

  return (
    <>
      {modal && <CreateModal handleCreateModal={handleCreateModal} />}
      <t.Container>
        <NavBar
          isCenter={false}
          title="대화"
          isAdmin={true}
          button="새 대화방"
          handleCreateModal={handleCreateModal}
        />
        <SearchBar handleSearch={handleSearch} />
        <section>
          <ChatBox />
          <ChatBox />
          <ChatBox />
          <ChatBox />
          <ChatBox />
          <ChatBox />
          <ChatBox />
          <ChatBox />
          <ChatBox />
          <ChatBox />
        </section>
      </t.Container>
    </>
  );
}
