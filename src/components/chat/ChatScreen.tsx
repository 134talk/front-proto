import {
  BottomButtonTab,
  Card,
  EmotionModal,
  NavBar,
  NextReminderModal,
} from 'components';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { EMOTION_LIST, KEYWORD_LIST } from 'shared/constants/constants';
import useModal from 'shared/hooks/useModal';
import useUserData from 'shared/hooks/useUserData';
import { setRecEmotion, setResQuestion } from 'shared/store/chatSlice';
import { useAppDispatch, useAppSelector } from 'shared/store/store';
import { Button, Emotion } from 'ui';
import * as t from './chatScreen.style';
import ChatSideNav from './ChatSideNav';
import ChatTutorial from './ChatTutorial';

export default function ChatScreen() {
  const { uId, tutorialKey, emotionKey, isNextReminder } = useUserData();
  const { roomId, chatUserId } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const emotionModal = useModal();
  const sideNavModal = useModal();
  const tutorialModal = useModal();
  const nextReminderModal = useModal();
  const sharedFlag = useAppSelector(
    state => state.chat?.resQuestion?.sharedFlag
  );
  const nextSpeaker = useAppSelector(
    state => state.chat?.resQuestion?.next_speaker
  );
  const socketFlag = useAppSelector(
    state => state.chat?.recChatRoom?.socket_flag
  );
  const chatUser = useAppSelector(state => state.chat?.recChatRoom?.speaker_id);
  const reJoinedUser = useAppSelector(
    state => state.chat?.recChatRoom?.re_enter_id
  );
  const speaker = useAppSelector(state => state.chat?.recQuestion?.speaker);
  const topic = useAppSelector(state => state.chat?.recQuestion?.question_list);
  const questionNumber = useAppSelector(
    state => state.chat?.recQuestion?.question_number
  );
  const endFlag = useAppSelector(
    state => state.chat?.recQuestion?.question_last_flag
  );
  const emotionCode = useAppSelector(
    state => state.chat?.recEmotion?.emotion_code
  );
  const newEmotion = useAppSelector(
    state => state.chat?.recNewEmotion?.emotion_list
  );
  const [isReJoined, setIsReJoined] = useState<boolean>(false);
  const [isRotate, setIsRotate] = useState<boolean>(false);
  const [sendEmotion, setSendEmotion] = useState<{
    emotion: string;
    id: number;
  } | null>(null);

  const handleOpenEmotion = (emotion: string, id: number) => {
    emotionModal.toggle();
    setSendEmotion({ emotion, id });
  };

  const matchedItem = KEYWORD_LIST
    ? KEYWORD_LIST.filter(item => item.keyword === topic?.keyword_name)
    : [];

  const handleNext = () => {
    if (!isNextReminder && speaker?.id === Number(uId))
      nextReminderModal.open();
    else {
      localStorage.removeItem('isNextReminder');
      if (!endFlag) {
        dispatch({
          type: 'sendData',
          payload: {
            destination: 'sendNextQuestion',
            data: {
              conversation_room_id: Number(roomId),
              conversation_user_id: Number(chatUserId),
              question_number: questionNumber + 1,
            },
          },
        });
      } else {
        dispatch({
          type: 'sendData',
          payload: {
            destination: 'sendNextQuestion',
            data: {
              conversation_room_id: Number(roomId),
              conversation_user_id: Number(chatUserId),
              question_number: questionNumber + 1,
            },
          },
        });
        dispatch({ type: 'disconnect' });
        localStorage.removeItem('emotionKey');
        localStorage.removeItem('selectKey');
        navigate(`/feedback/1/${roomId}/${chatUserId}`);
      }
    }
  };

  useEffect(() => {
    if (socketFlag === 2) {
      dispatch(setRecEmotion({ emotion_code: null }));
      if (chatUser === Number(chatUserId)) {
        dispatch({
          type: 'sendData',
          payload: {
            destination: 'sendQuestion',
            data: {
              conversation_room_id: Number(roomId),
              conversation_user_id: Number(chatUserId),
            },
          },
        });
      }
      localStorage.setItem('emotionKey', 'true');
      if (!tutorialKey) {
        tutorialModal.open();
      }
    } else if (socketFlag === 1) navigate(`/chat/${roomId}/${chatUserId}/1`);
  }, []);

  useEffect(() => {
    if (Number(chatUserId) === reJoinedUser && !isReJoined) {
      dispatch({
        type: 'sendData',
        payload: {
          destination: 'sendQuestion',
          data: {
            conversation_room_id: Number(roomId),
            conversation_user_id: Number(chatUserId),
          },
        },
      });
      dispatch({
        type: 'sendData',
        payload: {
          destination: 'getEmotion',
          data: {
            conversation_room_id: Number(roomId),
            conversation_user_id: Number(chatUserId),
          },
        },
      });
      setIsReJoined(true);
    }
  }, [reJoinedUser]);

  useEffect(() => {
    if (newEmotion) localStorage.setItem('emotionKey', 'true');
  }, [newEmotion]);

  useEffect(() => {
    if (sharedFlag) {
      toast.error(
        `이 주제에 대한 ${nextSpeaker?.nickname}(${nextSpeaker?.name})님의 이야기가 궁금해요.`
      );
      setTimeout(() => {
        dispatch(
          setResQuestion({
            sharedFlag: false,
            next_speaker: {
              nickname: null,
              name: null,
            },
          })
        );
      }, 5000);
    }
  }, [sharedFlag]);

  return (
    <>
      {tutorialModal.isOpen && <ChatTutorial onClose={tutorialModal.close} />}
      {sideNavModal.isOpen && <ChatSideNav onClose={sideNavModal.close} />}
      {nextReminderModal.isOpen && (
        <NextReminderModal onClose={nextReminderModal.close} />
      )}
      <EmotionModal sendEmotion={sendEmotion} modalActions={emotionModal} />
      <t.Container>
        <NavBar
          title="대화방"
          isCenter={true}
          isHamburger={true}
          isNew={emotionKey === 'true'}
          handleSideNav={sideNavModal.open}
        />
        <p>
          {speaker?.nickname}({speaker?.name})님이 선택한 질문
        </p>
        <div className="card_wrapper">
          <Card
            keyword={topic?.keyword_name}
            depth={topic?.depth}
            question={topic?.question_content}
            size="18rem"
            isFront={isRotate}
            lineColor={matchedItem[0]?.color[0]}
            fillColor={
              isRotate ? matchedItem[0]?.color[2] : matchedItem[0]?.color[1]
            }
            handleRotate={() => setIsRotate(!isRotate)}
          />
        </div>
        <BottomButtonTab height="16.5rem">
          <div className="emotion_wrapper">
            {EMOTION_LIST.map(item => (
              <Emotion
                image={item.source}
                key={item.id}
                isEmotion={emotionCode === item.id}
                onClick={() => handleOpenEmotion(item.emotion, item.id)}
              />
            ))}
          </div>
          {speaker?.id === Number(uId) ? (
            <Button
              category="confirm"
              text={
                endFlag ? '마지막 질문입니다.' : '다음 질문으로 넘어가볼까요?'
              }
              $bgColor={matchedItem[0]?.color[2]}
              margin="1.5rem 0 0 0"
              onClick={handleNext}
            />
          ) : endFlag ? (
            <Button
              category="confirm"
              text={'마지막 질문입니다.'}
              $bgColor={matchedItem[0]?.color[2]}
              margin="1.5rem 0 0 0"
              onClick={handleNext}
            />
          ) : (
            <></>
          )}
        </BottomButtonTab>
      </t.Container>
    </>
  );
}
