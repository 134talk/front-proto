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
  const dispatch = useAppDispatch();
  const userName = useAppSelector(
    state => state.chat?.subNotice?.speaker?.nickname
  );
  const navigate = useNavigate();
  const { roomId } = useParams();
  useEffect(() => {
    dispatch(subscribeSelect(`/sub/chat/question-order/${roomId}`));
    dispatch({
      type: 'sendData',
      payload: {
        destination: `/pub/question-notice/${roomId}`,
      },
    });
    dispatch(subscribeNotice(`/sub/chat/room/question-notice/${roomId}`));
    dispatch(subscribeEmotion(`/sub/chat/room/emoticon/${roomId}`));
    dispatch(subscribeEmotionList(`/sub/chat/room/emoticon/${roomId}/${uid}`));
    return () => {
      dispatch({
        type: 'unsubscribe',
        payload: {
          destination: `/sub/chat/question-order/${roomId}`,
        },
      });
    };
    // return () => {
    //   dispatch({
    //     type: 'unsubscribe',
    //     payload: { destination: `/sub/chat/question-order/${roomId}` },
    //   });
    //   dispatch({
    //     type: 'unsubscribe',
    //     payload: { destination: `/sub/chat/keyword/${roomId}/${uid}` },
    //   });
    //   dispatch({
    //     type: 'unsubscribe',
    //     payload: { destination: `/sub/chat/room/${roomId}/${uid}` },
    //   });
    // };
  }, []);

  useEffect(() => {
    if (userName) {
      setTimeout(() => {
        navigate(`/chat/${roomId}/5`);
      }, 5000);
    }
  }, [userName]);

  return (
    <t.Container>
      <NavBar isCenter={true} title="대화방" />
      <p>
        처음 이야기를 시작하실 분은
        <br />'{userName && userName}'님 입니다.
      </p>
      <img src={CHAT_NOTIFY_IMAGE} alt="chat_image" />
      <p>
        '{userName && userName}'님은
        <br />
        어떤 질문은 만났나요?
        <br />
        당신의 이야기를 들려주세요.
      </p>
    </t.Container>
  );
}
