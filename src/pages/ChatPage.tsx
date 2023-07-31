import { ChatNotifyScreen, ChatScreen, WaitingScreen } from 'components';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { recAlert, recChatRoom } from 'shared/store/chatAction';
import { useAppDispatch, useAppSelector } from 'shared/store/store';
import NotFoundPage from './NotFoundPage';

export default function ChatPage() {
  const { type, roomId, chatUserId } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // 소켓 fetching 데이터
  const checkInFlag = useAppSelector(
    state => state.chat?.recChatRoom?.check_in_flag
  );
  const socketFlag = useAppSelector(
    state => state.chat?.recChatRoom?.socket_flag
  );
  const timeout = useAppSelector(
    state => state.chat?.recAlert?.alert_five_minute
  );
  // 처음 렌더
  useEffect(() => {
    dispatch({ type: 'connect' });
    dispatch({
      type: 'sendData',
      payload: {
        destination: 'enterConversationRoom',
        data: {
          conversation_room_id: Number(roomId),
          conversation_user_id: Number(chatUserId),
        },
      },
    });
    dispatch(recChatRoom('recConversationRoom'));
    dispatch(recAlert('recAlert'));
    return () => {
      dispatch({ type: 'disconnect' });
    };
  }, []);
  // 재입장시 렌더 조건 처리
  useEffect(() => {
    const baseChatUrl = `/chat/${roomId}`;
    if (socketFlag === 0 && checkInFlag === false) navigate('/chats');
    if (socketFlag === 1) navigate(`${baseChatUrl}/0`);
    if (socketFlag === 1 && checkInFlag === true) navigate(`${baseChatUrl}/1`);
    if (socketFlag === 2) navigate(`${baseChatUrl}/1`);
    if (socketFlag === 3) navigate(`${baseChatUrl}/2`);
  }, [socketFlag, checkInFlag]);
  // 마감 5분전 & 종료 알림
  useEffect(() => {
    if (timeout === 1) toast.error('대화 마감 5분 전입니다.');
    if (timeout === 0) toast.error('대화 시간이 종료되었습니다.');
  }, [timeout]);

  const renderScreen = (pageNumber: number) => {
    const screenMap: { [key: number]: React.ElementType } = {
      0: WaitingScreen,
      1: ChatNotifyScreen,
      2: ChatScreen,
    };

    const ScreenComponent = screenMap[pageNumber];

    if (!ScreenComponent) {
      <NotFoundPage />;
    }

    return <ScreenComponent />;
  };

  return <>{renderScreen(Number(type))}</>;
}
