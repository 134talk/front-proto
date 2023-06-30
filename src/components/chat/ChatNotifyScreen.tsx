import { NavBar } from 'components';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CHAT_NOTIFY_IMAGE } from 'shared/constants/icons';
import useUserData from 'shared/hooks/useUserData';
import {
  subscribeEmotion,
  subscribeEmotionList,
  subscribeNotice,
  subscribeSelect,
} from 'shared/store/chatAction';
import { useAppDispatch, useAppSelector } from 'shared/store/store';
import * as t from './chatNotifyScreen.style';

export default function ChatNotifyScreen() {
  const { uid } = useUserData();
  const { roomId } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // 소켓 fetching 데이터
  const allRegistered = useAppSelector(
    state => state.chat?.subSelect?.allRegistered
  );
  const questionNumber = useAppSelector(
    state => state.chat?.subSelect?.questionNumber
  );
  const nickName = useAppSelector(
    state => state.chat?.subNotice?.speaker?.nickname
  );
  const name = useAppSelector(state => state.chat?.subNotice?.speaker?.name);
  // 처음 렌더시 구독 해제(대화 입장, 키워드 선택, 질문순서 등록) & 질문순서 등록만 재구독
  useEffect(() => {
    dispatch(subscribeSelect(`/sub/chat/question-order/${roomId}`));
    return () => {
      dispatch({
        type: 'unsubscribe',
        payload: { destination: `/sub/chat/room/${roomId}` },
      });
      dispatch({
        type: 'unsubscribe',
        payload: { destination: `/sub/chat/keyword/${roomId}/${uid}` },
      });
      dispatch({
        type: 'unsubscribe',
        payload: { destination: `/sub/chat/question-order/${roomId}` },
      });
    };
  }, []);
  // 순서 등록 완료시 질문 알림 조회 소켓 메세지 발행 & 나머지 구독(질문 알림 조회, 감정 조회, new 감정 리스트)
  useEffect(() => {
    if (allRegistered) {
      dispatch({
        type: 'sendData',
        payload: {
          destination: `/pub/question-notice/${roomId}`,
          data: {
            userId: Number(uid),
            questionNumber: questionNumber,
          },
        },
      });
      dispatch(subscribeNotice(`/sub/chat/room/question-notice/${roomId}`));
      dispatch(subscribeEmotion(`/sub/chat/room/emoticon/${roomId}`));
      dispatch(
        subscribeEmotionList(`/sub/chat/room/emoticon/${roomId}/${uid}`)
      );
    }
  }, [allRegistered, questionNumber]);
  useEffect(() => {
    if (nickName) {
      setTimeout(() => {
        navigate(`/chat/${roomId}/5`);
      }, 5000);
    }
  }, [nickName]);
  return (
    <t.Container>
      <NavBar isCenter={true} title="대화방" />
      <p>
        처음 이야기를 시작하실 분은
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
