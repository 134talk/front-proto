import { Card, NavBar } from 'components';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { KEYWORD_LIST } from 'shared/constants/constants';
import useUserData from 'shared/hooks/useUserData';
import { subscribeSelect } from 'shared/store/chatAction';
import { useAppDispatch, useAppSelector } from 'shared/store/store';
import { Button } from 'ui';
import * as t from './selectionScreen.style';

export default function SelectionScreen() {
  const { uid, selectKey } = useUserData();
  const { roomId } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // 소켓 fetching 데이터
  const subKeywordList = useAppSelector(
    state => state.chat?.subKeyword?.topicList
  );
  const allRegistered = useAppSelector(
    state => state.chat?.subSelect?.allRegistered
  );
  // 질문 카드 state
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [combinedList, setCombinedList] = useState([]);
  const [selectedId, setSelectedId] = useState<number>(null);
  const [orderList, setOrderList] = useState<number[]>([]);
  console.log('orderList: ', orderList); // 로그 지우기
  // 질문 카드 데이터 & 상수 데이터 매칭
  useEffect(() => {
    const newCombinedList =
      subKeywordList?.map(item => {
        const keyword = KEYWORD_LIST.find(el => el.id === item.keywordId);
        return { ...item, ...keyword, isFront: false };
      }) || [];
    setCombinedList(newCombinedList);
    if (newCombinedList[1]) {
      setSelectedId(newCombinedList[1].keywordId);
    }
  }, [subKeywordList]);
  // 질문 카드 회전 함수
  const handleRotate = useCallback(
    (id: number) => {
      setCombinedList(
        combinedList.map(item =>
          item.keywordId === id ? { ...item, isFront: !item.isFront } : item
        )
      );
    },
    [combinedList]
  );
  // 질문 카드 캐로셀 함수
  const handleSelect = useCallback(
    (id: number) => {
      const newIndex = combinedList.findIndex(item => item.keywordId === id);
      if (newIndex !== -1) {
        setSelectedId(id);
        setCurrentIndex(newIndex);
      }
    },
    [combinedList]
  );
  // 선택한 질문 카드 리스트 함수
  const handleSelectOrder = useCallback(() => {
    const order = orderList.indexOf(selectedId);
    if (orderList.includes(selectedId)) {
      toast.error(`이미 ${order + 1}번째로 선택한 질문입니다.`);
    } else {
      const selectedKeyword = subKeywordList.find(
        item => item.keywordId === selectedId
      );
      const questionId = selectedKeyword ? selectedKeyword.questionId : null;
      if (questionId !== null) {
        setOrderList(prevOrderList => {
          if (prevOrderList.length === 1) {
            const remainingKeyword = subKeywordList.find(
              item => !prevOrderList.includes(item.keywordId)
            );
            const remainingQuestionId = remainingKeyword
              ? remainingKeyword.questionId
              : null;
            return remainingQuestionId
              ? [...prevOrderList, questionId, remainingQuestionId]
              : prevOrderList;
          } else {
            return [...prevOrderList, questionId];
          }
        });
      }
    }
  }, [selectedId, orderList, combinedList]);
  // 선택한 질문 카드 리스트 소켓 메세지 발행 & 구독
  useEffect(() => {
    if (orderList.length > 2) {
      dispatch({
        type: 'sendData',
        payload: {
          destination: '/pub/question-order',
          data: {
            roomId: Number(roomId),
            userId: Number(uid),
            questionCodeList: orderList,
          },
        },
      });
      dispatch(subscribeSelect(`/sub/chat/question-order/${roomId}`));
    }
  }, [orderList]);
  // 키워드 다시 선택하기 함수
  const handleBack = () => {
    localStorage.setItem('selectKey', 'true');
    navigate(`/chat/${roomId}/2`);
  };
  // 모든 참가자 선택 완료시 질문 알림으로 이동
  useEffect(() => {
    if (allRegistered) navigate(`/chat/${roomId}/4`);
  }, [allRegistered]);
  console.log('allRegistered: ', allRegistered); // 로그 지우기

  return (
    <t.Container>
      <NavBar isCenter={true} title="대화방" />
      <div className="carousel_wrapper">
        {combinedList.map((item, index) => (
          <t.StyledCard
            order={index - currentIndex}
            selected={item.keywordId === selectedId}
            key={item.keywordId}
          >
            <Card
              keyword={item.keyword}
              depth={item.depth}
              question={item.questionName}
              lineColor={item.color[0]}
              fillColor={item.color[1]}
              isFront={item.isFront}
              size="16rem"
              handleRotate={() => handleRotate(item.keywordId)}
              handleSwipe={() => handleSelect(item.keywordId)}
            />
          </t.StyledCard>
        ))}
      </div>
      {orderList.length < 1 && (
        <p className="guide_text">
          <span>처음</span>으로 다뤄보고 싶은 <br />
          카드를 골라주세요.
        </p>
      )}
      {orderList.length === 1 && (
        <p className="guide_text">
          <span>두번째</span>로 다뤄보고 싶은 <br />
          카드를 골라주세요.
        </p>
      )}
      {orderList.length > 1 && (
        <p className="guide_text">
          대화가 곧 시작될거에요.
          <br />
          잠시만 기다려주세요.
        </p>
      )}
      <p className="sub_text">질문에 답을 하며 대화 여행이 진행됩니다.</p>
      <div className="button_wrapper">
        {!selectKey && (
          <Button
            category="cancel"
            text="키워드 다시고르기 (1회)"
            onClick={handleBack}
          />
        )}
        <Button
          category="confirm"
          text="질문 선택하기"
          onClick={handleSelectOrder}
          disabled={orderList.length > 1}
        />
      </div>
    </t.Container>
  );
}
