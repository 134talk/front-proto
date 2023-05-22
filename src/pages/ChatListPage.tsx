import {
  ChatBox,
  CheckModal,
  CreateModal,
  NavBar,
  SearchBar,
  SettingModal,
} from 'components';
import { useState } from 'react';
import * as t from './chatListPage.style';

export default function ChatListPage() {
  const [createModal, setCreateModal] = useState(false);
  const [settingModal, setSettingModal] = useState(false);
  const [checkModal, setCheckModal] = useState(false);
  const [chatTime, setChatTime] = useState('30');

  const handleCreateModal = () => setCreateModal(prev => !prev);
  const handleSearch = () => {};
  const handleSettingModal = () => setSettingModal(prev => !prev);
  const handleCheckModal = () => setCheckModal(prev => !prev);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setChatTime(e.target.value);

  return (
    <>
      {checkModal && (
        <CheckModal chatTime={chatTime} onClose={handleCheckModal} />
      )}
      {createModal && <CreateModal handleCreateModal={handleCreateModal} />}
      {settingModal && (
        <SettingModal
          chatTime={chatTime}
          onChange={handleChange}
          onOpenCheckModal={handleCheckModal}
          onClose={handleSettingModal}
        />
      )}
      <t.Container>
        <NavBar
          isCenter={false}
          title="대화"
          isAdmin={true}
          button="새 대화방"
          handleCreateModal={handleCreateModal}
          handleSetting={handleSettingModal}
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
