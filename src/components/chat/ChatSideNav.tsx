import { UserList } from 'components';
import { EMOTION_LIST } from 'shared/constants/constants';
import { setIsNew } from 'shared/store/chatSlice';
import { useAppDispatch, useAppSelector } from 'shared/store/store';
import isMobile from 'shared/utils/deviceDetector';
import * as t from './chatSideNav.style';

interface ChatSideNavProps {
  onClose?: () => void;
}
export default function ChatSideNav({ onClose }: ChatSideNavProps) {
  const dispatch = useAppDispatch();
  // 소켓 fetching 데이터
  const emotionList = useAppSelector(
    state => state.chat?.subEmotionList?.emoticonList
  );
  const subUserList = useAppSelector(state => state.chat?.subNotice?.userList);
  const guide = useAppSelector(
    state => state.chat?.subNotice?.topic?.questionGuide
  );
  // 감정 리스트 & 상수 데이터 매칭
  const combinedEmotionList = EMOTION_LIST.map(emotionItem => {
    const matchedItem = emotionList?.find(
      emotion => emotion.emoticonCode === emotionItem.id
    );
    return {
      ...emotionItem,
      ...matchedItem,
    };
  });

  const handleClose = () => {
    onClose();
    dispatch(setIsNew(false));
  };
  return (
    <t.Container onClick={handleClose}>
      <t.NavWrapper isMobile={isMobile}>
        <div className="title_wrapper">
          <p className="title_text">내가 공감받은 감정은?</p>
        </div>
        <div className="emotion_wrapper">
          {combinedEmotionList?.map(item => (
            <div className="emotion_content_wrapper" key={item.id}>
              <div className="image_wrapper">
                <img src={item.source} alt={item.emotion} />
                {item.emoticonCount > 0 && (
                  <div className="badge_wrapper">
                    <span>{item.emoticonCount}</span>
                  </div>
                )}
              </div>
              <p>{item.emotion}</p>
            </div>
          ))}
        </div>
        <div className="title_wrapper">
          <p className="title_text">대화 가이드 💬</p>
          <p className="sub_text">이렇게 질문 해 보는 건 어떨까요?</p>
        </div>
        <div className="guide_wrapper">
          <ol>
            {guide.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div>
        <div className="title_wrapper">
          <p className="title_text">대화 상대</p>
        </div>
        <UserList userInfo={subUserList} $isRow={true} />
      </t.NavWrapper>
    </t.Container>
  );
}
