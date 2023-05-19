import { ChatBox, NavBar, SearchBar } from 'components';
import { RELOAD_ICON } from 'shared/constants/icons';
import * as t from './chatListPage.style';

export default function ChatListPage() {
  const handleCreateModal = () => {};
  const handleSearch = () => {};
  const handleReload = () => {};

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
      <button onClick={handleReload}>
        <img src={RELOAD_ICON} alt="새로고침" />
        새로고침
      </button>
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
