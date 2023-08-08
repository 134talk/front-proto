import { BottomButtonTab, Card, ExitConfirmModal, NavBar } from 'components';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { KEYWORD_LIST } from 'shared/constants/constants';
import useModal from 'shared/hooks/useModal';
import useUserData from 'shared/hooks/useUserData';
import useSelection from 'shared/query/useSelection';
import { Button, CardImg } from 'ui';
import * as t from './chatSelectionPage.style';

export default function ChatSelectionPage() {
  const { roomId, chatUserId } = useParams();
  const { selectKey } = useUserData();
  const exitConfirmModal = useModal();
  const navigate = useNavigate();
  const [combinedList, setCombinedList] = useState([]);
  const [selectedId, setSelectedId] = useState<number>(null);
  const [cardItem, setCardItem] = useState(null);
  const [isRotate, setIsRotate] = useState<boolean>(false);
  const [orderList, setOrderList] = useState<number[]>([]);
  const { questionList, mutate } = useSelection(
    Number(roomId),
    Number(chatUserId)
  );

  useEffect(() => {
    const newCombinedList =
      questionList?.map(item => {
        const keyword = KEYWORD_LIST.find(
          el => el.keyword === item.keyword_name
        );
        return { ...item, ...keyword, isFront: false };
      }) || [];
    setCombinedList(newCombinedList);
    if (newCombinedList[0]) {
      setSelectedId(newCombinedList[0].question_id);
      setCardItem(newCombinedList[0]);
    }
  }, [questionList]);

  const handleSelect = (order: number) => {
    const selectedCardItem = combinedList.find(
      item => item.question_id === order
    );
    setSelectedId(order);
    setCardItem(selectedCardItem);
  };

  const handleSelectOrder = () => {
    const order = orderList.indexOf(selectedId);
    if (orderList.includes(selectedId)) {
      toast.error(`이미 ${order + 1}번째로 선택한 질문입니다.`);
    } else {
      if (selectedId !== null) {
        setOrderList(prev => {
          if (orderList.length === 1) {
            const remainedItem = combinedList.find(
              item =>
                !prev.includes(item.question_id) &&
                item.question_id !== selectedId
            );
            const remainedId = remainedItem.question_id;
            return [...prev, selectedId, remainedId];
          } else {
            return [...prev, selectedId];
          }
        });
      }
    }
  };

  useEffect(() => {
    if (orderList.length > 2) {
      mutate({
        conversation_room_id: Number(roomId),
        conversation_user_id: Number(chatUserId),
        question_code_list: orderList,
      });
    }
  }, [orderList]);

  const handleBack = () => {
    navigate(`/chat-keyword/${roomId}/${chatUserId}`);
  };

  return (
    <>
      <ExitConfirmModal modalActions={exitConfirmModal} />
      <t.Container>
        <NavBar
          isCenter={true}
          title="대화방"
          isNav={true}
          handleNav={exitConfirmModal.open}
        />
        <div className="selection_order_wrapper">
          {combinedList?.map(item => (
            <div
              className="selection_card_wrapper"
              key={item.keyword_id}
              onClick={() => handleSelect(item.question_id)}
            >
              <CardImg
                lineColor={item.color[0]}
                fillColor={item.color[1]}
                size="4rem"
              />
              <p>{item.keyword_name}</p>
              {orderList.includes(item.question_id) && (
                <span>{orderList.indexOf(item.question_id) + 1}</span>
              )}
            </div>
          ))}
        </div>
        <div className="card_wrapper">
          <Card
            keyword={cardItem?.keyword_name}
            depth={cardItem?.depth}
            question={cardItem?.question_content}
            size="16rem"
            isFront={isRotate}
            lineColor={cardItem?.color[0]}
            fillColor={isRotate ? cardItem?.color[2] : cardItem?.color[1]}
            handleRotate={() => setIsRotate(!isRotate)}
          />
        </div>
        <div className="guide_text_wrapper">
          <p className="guide_text">
            <span>{orderList.length === 0 ? '처음으' : '두번째'}</span>로
            다뤄보고 싶은 <br />
            카드를 골라주세요.
          </p>
          <p className="sub_text">질문에 답을 하며 대화 여행이 진행됩니다.</p>
        </div>
        <BottomButtonTab height="9.25rem">
          <Button
            category="confirm"
            text="질문 선택하기"
            onClick={handleSelectOrder}
          />
          {selectKey === 'false' && (
            <Button
              category="cancel"
              text="키워드 다시 고르기 (1회)"
              margin="1rem 0 0 0"
              onClick={handleBack}
            />
          )}
        </BottomButtonTab>
      </t.Container>
    </>
  );
}
