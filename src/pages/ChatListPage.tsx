import {
  ChatBox,
  CheckModal,
  CreateModal,
  GuideModal,
  NavBar,
  SearchBar,
  SettingModal,
} from 'components';
import debounce from 'lodash/debounce';
import { useCallback, useState } from 'react';
import toast from 'react-hot-toast';
import useUserData from 'shared/hooks/useUserData';
import useChatList from 'shared/query/useChatList';
import isMobile from 'shared/utils/deviceDetector';
import * as t from './chatListPage.style';

export default function ChatListPage() {
  const [createModal, setCreateModal] = useState(false);
  const [settingModal, setSettingModal] = useState(false);
  const [checkModal, setCheckModal] = useState(false);
  const [guideModal, setGuideModal] = useState(false);
  const [chatTime, setChatTime] = useState('30');
  const [keyword, setKeyword] = useState('');
  const [chatId, setChatId] = useState(0);

  const handleCreateModal = () => setCreateModal(prev => !prev);
  const handleSettingModal = () => setSettingModal(prev => !prev);
  const handleCheckModal = () => setCheckModal(prev => !prev);
  const handleGuideModal = () => {
    setGuideModal(prev => !prev);
  };

  const enterRoom = (isMyRoom: boolean) => {
    if (isMyRoom) handleGuideModal();
    else toast.error('참여할 수 없는 대화방입니다.');
  };

  const { chatList, refetch } = useChatList(keyword);

  const onDelete = () => {
    setKeyword('');
    getChatListByKeyword();
  };
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
    getChatListByKeyword();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setChatTime(e.target.value);

  const { isAdmin } = useUserData();

  const getChatListByKeyword = useCallback(
    debounce(() => refetch(), 500),
    [refetch]
  );

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
      {guideModal && <GuideModal onClose={handleGuideModal} roomId={chatId} />}
      <NavBar
        isCenter={false}
        isMargin
        title="대화"
        isAdmin={isAdmin === 'true'}
        button="새 대화방"
        handleCreateModal={handleCreateModal}
        handleSetting={handleSettingModal}
      />
      <t.Container>
        <SearchBar
          handleSearch={handleSearch}
          keyword={keyword}
          onDelete={onDelete}
        />
        <t.Scroll $isMobile={isMobile}>
          {chatList?.length > 0 ? (
            chatList.map(({ roomId, roomName, joinFlag }) => (
              <div key={roomId} onClick={() => setChatId(roomId)}>
                <ChatBox
                  roomId={roomId}
                  roomName={roomName}
                  isJoin={joinFlag}
                  onClick={() => enterRoom(joinFlag)}
                />
              </div>
            ))
          ) : (
            <p className="notFound">진행 중인 대화방이 없습니다.</p>
          )}
        </t.Scroll>
      </t.Container>
    </>
  );
}
