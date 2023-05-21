import { ChatBox, NavBar, SearchBar } from 'components';
import * as t from './chatListPage.style';

export default function ChatListPage() {
  const handleCreateModal = () => {};
  const handleSearch = () => {};

  return (
    <t.Container>
      <NavBar
        isCenter={false}
        isNav={true}
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
  );
}
