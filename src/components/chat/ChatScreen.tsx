import { BottomButtonTab, Card, EmotionModal, NavBar } from 'components';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { EMOTION_LIST, KEYWORD_LIST } from 'shared/constants/constants';
import useModal from 'shared/hooks/useModal';
import useUserData from 'shared/hooks/useUserData';
import { setIsNew } from 'shared/store/chatSlice';
import { useAppDispatch, useAppSelector } from 'shared/store/store';
import { Button, Emotion } from 'ui';
import * as t from './chatScreen.style';
import ChatSideNav from './ChatSideNav';
import ChatTutorial from './ChatTutorial';

export default function ChatScreen() {
  const { uid, tutorialKey } = useUserData();
  const { roomId } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const emotionModal = useModal();
  const sideNavModal = useModal();
  const tutorialModal = useModal();
  // 소켓 fetching 데이터
  const speaker = useAppSelector(state => state.chat?.subNotice?.speaker);
  const topic = useAppSelector(state => state.chat?.subNotice?.topic);
  const metadata = useAppSelector(state => state.chat?.subNotice?.metadata);
  const emotionCode = useAppSelector(
    state => state.chat?.subEmotion?.emoticonCode
  );
  const newEmotion = useAppSelector(
    state => state.chat?.subEmotionList?.emoticonList
  );
  const isNew = useAppSelector(state => state.chat?.isNew);
  // questionNumber 등록 state
  const [prevQuestionNumber, setPrevQuestionNumber] = useState<number>(
    metadata?.questionNumber
  );
  // 질문 카드 회전 state
  const [isRotate, setIsRotate] = useState<boolean>(false);
  // 감정 보내기 state
  const [sendEmotion, setSendEmotion] = useState<{
    emotion: string;
    id: number;
  } | null>(null);
  const handleOpenEmotion = (emotion: string, id: number) => {
    emotionModal.toggle();
    setSendEmotion({ emotion, id });
  };
  // 질문 카드 & 상수 데이터 매칭
  const matchedItem = KEYWORD_LIST
    ? KEYWORD_LIST.filter(item => item.keyword === topic?.keywordName)
    : [];
  // 버튼 텍스트 => 다음 대화 || 대화 마무리
  const endFlag = metadata?.questionNumber === metadata?.finalQuestionNumber;
  const handleNext = () => {
    if (!endFlag) {
      dispatch({
        type: 'sendData',
        payload: {
          destination: `/pub/question-notice/${roomId}`,
          data: {
            userId: Number(uid),
            questionNumber: metadata?.questionNumber + 1,
          },
        },
      });
      navigate(`/chat/${roomId}/4`);
    } else {
      dispatch({ type: 'disconnect' });
      navigate(`/feedback/1/${roomId}`);
    }
  };
  // 튜토리얼 오픈여부 확인
  useEffect(() => {
    if (!tutorialKey) {
      tutorialModal.open();
    }
  }, []);
  // new 감정 뱃지 처리
  useEffect(() => {
    if (newEmotion) {
      dispatch(setIsNew(true));
    }
  }, [newEmotion]);
  // 새로운 질문 넘어가기일 때 렌더
  useEffect(() => {
    if (
      metadata?.questionNumber &&
      metadata?.questionNumber > prevQuestionNumber
    ) {
      setPrevQuestionNumber(metadata?.questionNumber);
      navigate(`/chat/${roomId}/4`);
    }
  }, [metadata]);

  return (
    <>
      {tutorialModal.isOpen && <ChatTutorial onClose={tutorialModal.close} />}
      {sideNavModal.isOpen && <ChatSideNav onClose={sideNavModal.close} />}
      <EmotionModal sendEmotion={sendEmotion} modalActions={emotionModal} />
      <t.Container>
        <NavBar
          title="대화방"
          isCenter={true}
          isHamburger={true}
          isNew={isNew}
          handleSideNav={sideNavModal.open}
        />
        <p>
          {speaker?.nickname}({speaker?.name})님이 선택한 질문
        </p>
        <div className="card_wrapper">
          <Card
            keyword={topic?.keywordName}
            depth={topic?.depth}
            question={topic?.questionName}
            size="15rem"
            isFront={isRotate}
            lineColor={matchedItem[0]?.color[0]}
            fillColor={
              isRotate ? matchedItem[0]?.color[2] : matchedItem[0]?.color[1]
            }
            handleRotate={() => setIsRotate(!isRotate)}
          />
        </div>
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
        <BottomButtonTab>
          {speaker?.userId === Number(uid) ? (
            <Button
              category="confirm"
              text={
                endFlag ? '마지막 질문입니다.' : '다음 질문으로 넘어가볼까요?'
              }
              bgColor={matchedItem[0]?.color[2]}
              onClick={handleNext}
            />
          ) : endFlag ? (
            <Button
              category="confirm"
              text={'마지막 질문입니다.'}
              bgColor={matchedItem[0]?.color[2]}
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
