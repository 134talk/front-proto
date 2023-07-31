import { NavBar } from 'components';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CHAT_NOTIFY_IMAGE } from 'shared/constants/icons';
import { recNotify } from 'shared/store/chatAction';
import { useAppDispatch, useAppSelector } from 'shared/store/store';
import * as t from './chatNotifyScreen.style';

export default function ChatNotifyScreen() {
  const { roomId, chatUserId } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // 소켓 fetching 데이터
  const nickName = useAppSelector(
    state => state.chat?.recNotify?.speaker?.nickname
  );
  const name = useAppSelector(state => state.chat?.recNotify?.speaker?.name);
  // 처음 렌더시 구독 해제(대화 입장, 키워드 선택, 질문순서 등록) & 질문순서 등록만 재구독
  useEffect(() => {
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
    dispatch(recNotify('recNotify'));
  }, []);

  useEffect(() => {
    if (nickName) {
      setTimeout(() => {
        navigate(`/chat/${roomId}/5`);
      }, 1000);
    }
  }, [nickName]);

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
