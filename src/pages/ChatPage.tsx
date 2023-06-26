import {
  ChatNotifyScreen,
  ChatScreen,
  IntroductionScreen,
  KeywordScreen,
  SelectionScreen,
  WaitingScreen,
} from 'components';
import { useEffect, useMemo } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import useUserData from 'shared/hooks/useUserData';
import { subscribeTimeout, subscribeUser } from 'shared/store/chatAction';
import { useAppDispatch, useAppSelector } from 'shared/store/store';

export default function ChatPage() {
  const { type, roomId } = useParams();
  const { uid } = useUserData();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const chatPageUser = useAppSelector(state => state.chat?.subUser);
  console.log('chatPageUser: ', chatPageUser);
  const chatPageTimeout = useAppSelector(state => state.chat?.subTimeout);
  console.log('chatPageTimeout: ', chatPageTimeout);
  const checkInFlag = useAppSelector(state => state.chat?.subUser?.checkInFlag);
  const socketFlag = useAppSelector(
    state => state.chat?.subUser?.chatroomUserInfos[0]?.socketFlag
  );
  const timeout = useAppSelector(
    state => state.chat?.subTimeout?.fiveMinuteLeft
  );

  // 대화방 입장 메세지 발행
  const enterPayload = useMemo(
    () => ({
      destination: '/pub/enter',
      data: {
        roomId: roomId,
        userId: uid,
        selected: true,
        socketFlag: 0,
      },
    }),
    [roomId, uid]
  );

  // 처음 렌더
  useEffect(() => {
    dispatch({ type: 'connect' });
    dispatch({ type: 'sendData', payload: enterPayload });
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
    if (socketFlag === 1 || socketFlag === 2) navigate(`${baseChatUrl}/1`);
    if (socketFlag === 3) navigate(`${baseChatUrl}/2`);
    if (socketFlag === 4 || socketFlag === 5) navigate(`${baseChatUrl}/3`);
    if (socketFlag === 6) navigate(`${baseChatUrl}/4`);
  }, [socketFlag, checkInFlag]);

  // 마감 5분전 알림
  useEffect(() => {
    if (timeout) toast.error('대화 마감 5분 전입니다.');
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

    // 이 부분은 404 페이지 처리
    if (!ScreenComponent) {
      throw new Error(`Invalid page number: ${pageNumber}`);
    }

    return <ScreenComponent />;
  };

  return <>{renderScreen(Number(type))}</>;
}
