import { NavBar, UserList } from 'components';
import { useState } from 'react';
import { Button } from 'ui';
import * as t from './introductionScreen.style';

export default function IntroductionScreen() {
  const [isCheck, setIsCheck] = useState<boolean>(false);
  const handleCheckIn = () => {
    setIsCheck(true);
  };
  return (
    <t.Container>
      <NavBar isCenter={true} title="대화방" />
      <div className="intro_wrapper">
        <h2>나의 새로운 이름을 소개해주세요.</h2>
        <p>나와 닮은 부족이 여기에도 있나요?</p>
      </div>
      <UserList isCheck={isCheck} scale="medium" isRow={false} />
      <Button
        category="confirm"
        text="자기소개 마무리하기"
        margin="3rem 0 0 0"
        // change state (checkIn) if user checked in
        onClick={handleCheckIn}
      />
    </t.Container>
  );
}
