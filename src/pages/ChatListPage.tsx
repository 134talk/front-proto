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
import { useNavigate } from 'react-router-dom';
import { updateGuideStatus } from 'shared/api/chatApi';
import useUserData from 'shared/hooks/useUserData';
import useChatFlag from 'shared/query/useChatFlag';
import useChatList from 'shared/query/useChatList';
import isMobile from 'shared/utils/deviceDetector';
import * as t from './chatListPage.style';

export default function ChatListPage() {
  const navigate = useNavigate();
  const [createModal, setCreateModal] = useState(false);
  const [settingModal, setSettingModal] = useState(false);
  const [checkModal, setCheckModal] = useState(false);
  const [guideModal, setGuideModal] = useState(false);
  const [chatTime, setChatTime] = useState('30');
  const [keyword, setKeyword] = useState('');
  const [chatId, setChatId] = useState(0);
  const [chatUserId, setChatUserId] = useState(0);
  const { uId, isGuideAccess, channel } = useUserData();

  const { mutate } = useChatFlag();

  const handleCreateModal = () => setCreateModal(prev => !prev);
  const handleSettingModal = () => setSettingModal(prev => !prev);
  const handleCheckModal = () => setCheckModal(prev => !prev);
  const handleGuIdeModal = () => {
    updateGuideStatus(uId);
    setGuideModal(prev => !prev);
  };

  const { chatList, refetch, error } = useChatList(keyword);
  const resetReJoinFlag = chatList?.every(el => el.re_join_flag === false);

  const enterRoom = (
    isMyRoom: boolean,
    isReJoin: boolean,
    id: number,
    userId: number
  ) => {
    if (isMyRoom) {
      if (resetReJoinFlag) {
        if (isGuideAccess === 'true') handleGuIdeModal();
        else
          mutate({
            conversation_room_id: id,
            conversation_user_id: userId,
            team_id: Number(channel),
          });
      } else {
        if (isReJoin) {
          mutate({
            conversation_room_id: id,
            conversation_user_id: userId,
            team_id: Number(channel),
          });
        } else toast.error('참여할 수 없는 대화방입니다.');
      }
    } else toast.error('참여할 수 없는 대화방입니다.');
  };

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

  useEffect(() => {
    const isFinishedChat = chatList?.find(el => el.conversation_flag === 2);
    if (isFinishedChat && isFinishedChat.remained_feedback === 0)
      navigate(
        `/feedback/1/${isFinishedChat.conversation_room_id}/${isFinishedChat.conversation_user_id}`
      );
    else if (isFinishedChat && isFinishedChat.remained_feedback === 1)
      navigate(
        `/feedback/3/${isFinishedChat.conversation_room_id}/${isFinishedChat.conversation_user_id}`
      );
    else return;
  }, [chatList]);

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
      {guideModal && (
        <GuideModal
          onClose={handleGuIdeModal}
          roomId={chatId}
          chatUserId={chatUserId}
        />
      )}
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
            chatList?.map(
              ({
                conversation_room_id,
                user_info,
                join_flag,
                re_join_flag,
                emotions,
                conversation_user_id,
                conversation_flag,
              }) => (
                <div
                  key={conversation_room_id}
                  onClick={() => {
                    setChatUserId(conversation_user_id);
                    setChatId(conversation_room_id);
                  }}
                >
                  <ChatBox
                    roomId={conversation_room_id}
                    roomName={user_info}
                    isChatFlag={conversation_flag}
                    isJoin={join_flag}
                    emoticons={emotions}
                    onClick={() =>
                      enterRoom(
                        join_flag,
                        re_join_flag,
                        conversation_room_id,
                        conversation_user_id
                      )
                    }
                  />
                </div>
              )
            )
          ) : (
            <p className="notFound">진행 중인 대화방이 없습니다.</p>
          )}
        </t.Scroll>
      </t.Container>
    </>
  );
}
