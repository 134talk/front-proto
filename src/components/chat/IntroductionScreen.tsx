import { NavBar, UserList } from 'components';
import { useParams } from 'react-router-dom';
import useUserData from 'shared/hooks/useUserData';
import { useAppDispatch, useAppSelector } from 'shared/store/store';
import { Button } from 'ui';
import * as t from './introductionScreen.style';

export default function IntroductionScreen() {
  const dispatch = useAppDispatch();
  const { roomId } = useParams();
  const { uid } = useUserData();
  const subUserList = useAppSelector(
    state => state.chat?.subUser?.chatroomUserInfos
  );
  const handleCheckIn = () => {
    dispatch({
      type: 'sendData',
      payload: {
        destination: '/pub/enter',
        data: {
          roomId: roomId,
          userId: uid,
          selected: true,
          socketFlag: 2,
        },
      },
    });
  };
  return (
    <t.Container>
      <NavBar isCenter={true} title="대화방" />
      <div className="intro_wrapper">
        <h2>나의 새로운 이름을 소개해주세요.</h2>
        <p>나와 닮은 부족이 여기에도 있나요?</p>
      </div>
      <UserList scale="medium" $isRow={false} userInfo={subUserList} />
      <Button
        category="confirm"
        text="자기소개 마무리하기"
        margin="3rem 0 0 0"
        onClick={handleCheckIn}
      />
    </t.Container>
  );
}
