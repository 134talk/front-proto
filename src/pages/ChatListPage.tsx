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
import { useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { updateGuideStatus } from 'shared/api/chatApi';
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

  const { uId } = useUserData();

  const handleCreateModal = () => setCreateModal(prev => !prev);
  const handleSettingModal = () => setSettingModal(prev => !prev);
  const handleCheckModal = () => setCheckModal(prev => !prev);
  const handleGuIdeModal = () => {
    updateGuideStatus(uId);
    setGuideModal(prev => !prev);
  };

  const enterRoom = (isMyRoom: boolean) => {
    if (isMyRoom) handleGuIdeModal();
    else toast.error('참여할 수 없는 대화방입니다.');
  };

  const { chatList, refetch, error } = useChatList(keyword);

  useEffect(() => {
    if (error?.response.data.errorCode === 1035) {
      toast.error('검색 결과가 없습니다.');
      onDelete();
    }
  }, [error]);

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
      {guideModal && <GuideModal onClose={handleGuIdeModal} roomId={chatId} />}
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
            chatList.map(({ id, name, joinFlag, emotions }) => (
              <div key={id} onClick={() => setChatId(id)}>
                <ChatBox
                  roomId={id}
                  roomName={name}
                  isJoin={joinFlag}
                  emoticons={emotions}
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
