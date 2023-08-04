import { NavBar } from 'components';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CHAT_NOTIFY_IMAGE } from 'shared/constants/icons';
import { useAppDispatch, useAppSelector } from 'shared/store/store';
import * as t from './chatNotifyScreen.style';

export default function ChatNotifyScreen() {
  const { roomId, chatUserId } = useParams();
  const dispatch = useAppDispatch();
  // 소켓 fetching 데이터
  const chatUser = useAppSelector(state => state.chat?.recChatRoom?.speaker_id);
  const nickName = useAppSelector(
    state => state.chat?.recNotify?.speaker?.nickname
  );
  const name = useAppSelector(state => state.chat?.recNotify?.speaker?.name);
  // 처음 렌더시 질문 알림 조회 on, emit
  useEffect(() => {
    if (chatUser === Number(chatUserId)) {
      dispatch({
        type: 'sendData',
        payload: {
          destination: 'sendNotify',
          data: {
            conversation_room_id: Number(roomId),
            conversation_user_id: Number(chatUserId),
          },
        },
      });
    }
  }, []);

  return (
    <t.Container>
      <NavBar isCenter={true} title="대화방" />
      <p>
        이야기를 시작하실 분은
        <br />'{nickName && `${nickName}(${name})`}'님 입니다.
      </p>
      <img src={CHAT_NOTIFY_IMAGE} alt="chat_image" />
      <p>
        '{nickName && `${nickName}(${name})`}'님은
        <br />
        어떤 질문은 만났나요?
        <br />
        당신의 이야기를 들려주세요.
      </p>
    </t.Container>
  );
}
