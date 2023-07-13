import {
  ChatNotifyScreen,
  ChatScreen,
  IntroductionScreen,
  KeywordScreen,
  SelectionScreen,
  WaitingScreen,
} from 'components';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import useUserData from 'shared/hooks/useUserData';
import { subscribeTimeout, subscribeUser } from 'shared/store/chatAction';
import { useAppDispatch, useAppSelector } from 'shared/store/store';
import NotFoundPage from './NotFoundPage';

export default function ChatPage() {
  const { type, roomId } = useParams();
  const { uid } = useUserData();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // 소켓 fetching 데이터
  const checkInFlag = useAppSelector(state => state.chat?.subUser?.checkInFlag);
  const socketFlag = useAppSelector(
    state => state.chat?.subUser?.chatroomUserInfos[0]?.socketFlag
  );
  const timeout = useAppSelector(
    state => state.chat?.subTimeout?.fiveMinuteLeft
  );
  // 처음 렌더
  useEffect(() => {
    dispatch({ type: 'connect' });
    dispatch({
      type: 'sendData',
      payload: {
        destination: '/pub/enter',
        data: {
          roomId: Number(roomId),
          userId: Number(uid),
          selected: true,
          socketFlag: 0,
        },
      },
    });
    dispatch(subscribeUser(`/sub/chat/room/${roomId}`));
    dispatch(subscribeTimeout(`/sub/chat/room/timeout/${roomId}`));
    return () => {
      dispatch({ type: 'disconnect' });
    };
  }, []);
  // 재입장시 렌더 조건 처리
  useEffect(() => {
    const baseChatUrl = `/chat/${roomId}`;
    if (socketFlag === 0 && checkInFlag === 'stillFalse') navigate('/chats');
    if (socketFlag === 0) navigate(`${baseChatUrl}/0`);
    if (socketFlag === 1 && checkInFlag === 'stillFalse') navigate('/chats');
    if (socketFlag === 1 || socketFlag === 2) navigate(`${baseChatUrl}/1`);
    if (socketFlag === 3) navigate(`${baseChatUrl}/2`);
    if (socketFlag === 4 || socketFlag === 5) navigate(`${baseChatUrl}/3`);
    if (socketFlag === 6) navigate(`${baseChatUrl}/4`);
  }, [socketFlag, checkInFlag]);
  // 마감 5분전 & 종료 알림
  useEffect(() => {
    if (timeout === true) toast.error('대화 마감 5분 전입니다.');
    if (timeout === false) toast.error('대화 시간이 종료되었습니다.');
  }, [timeout]);

  const renderScreen = (pageNumber: number) => {
    const screenMap: { [key: number]: React.ElementType } = {
      0: WaitingScreen,
      1: IntroductionScreen,
      2: KeywordScreen,
      3: SelectionScreen,
      4: ChatNotifyScreen,
      5: ChatScreen,
    };

    const ScreenComponent = screenMap[pageNumber];

    if (!ScreenComponent) {
      <NotFoundPage />;
    }

    return <ScreenComponent />;
  };

  return <>{renderScreen(Number(type))}</>;
}
