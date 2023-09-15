import { ChatNotifyScreen, ChatScreen, WaitingScreen } from 'components';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import {
  recAlert,
  recChatRoom,
  recEmotion,
  recNewEmotion,
  recNotify,
  recQuestion,
  resQuestion,
} from 'shared/store/chatAction';
import { useAppDispatch, useAppSelector } from 'shared/store/store';
import NotFoundPage from './NotFoundPage';

export default function ChatPage() {
  const { type, roomId, chatUserId } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const checkInFlag = useAppSelector(
    state => state.chat?.recChatRoom?.check_in_flag
  );
  const socketFlag = useAppSelector(
    state => state.chat?.recChatRoom?.socket_flag
  );
  const timeout = useAppSelector(
    state => state.chat?.recAlert?.alert_five_minute
  );

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
    dispatch(recNotify('recNotify'));
    dispatch(recQuestion('recQuestion'));
    dispatch(resQuestion('resQuestion'));
    dispatch(recEmotion('recEmotion'));
    dispatch(recNewEmotion('recNewEmotion'));
    return () => {
      dispatch({ type: 'disconnect' });
    };
  }, []);

  useEffect(() => {
    const baseChatUrl = `/chat/${roomId}/${chatUserId}`;
    if (socketFlag === 0 && checkInFlag === false) navigate('/chats');
    if (socketFlag === 1 && checkInFlag === true) navigate(`${baseChatUrl}/1`);
    if (socketFlag === 2) {
      setTimeout(() => {
        navigate(`${baseChatUrl}/2`);
      }, 3000);
    }
  }, [socketFlag, checkInFlag]);

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
