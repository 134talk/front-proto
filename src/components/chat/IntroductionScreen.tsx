import { NavBar, UserList } from 'components';
import { useState } from 'react';
import { styled } from 'styled-components';
import { Button } from 'ui';

export default function IntroductionScreen() {
  const [isCheck, setIsCheck] = useState<boolean>(true);
  const handleCheckIn = () => {
    setIsCheck(true);
  };
  return (
    <Container>
      <NavBar isCenter={true} title="대화방" />
      <div className="intro_wrapper">
        <h2>나의 새로운 이름을 소개해주세요.</h2>
        <p>나와 닮은 부족이 여기에도 있나요?</p>
      </div>
      <UserList isCheck={isCheck} scale="medium" />
      <Button
        category="confirm"
        text="자기소개 마무리하기"
        margin="3rem 0 0 0"
        onClick={handleCheckIn}
      />
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  div {
    &.intro_wrapper {
      display: flex;
      flex-direction: column;
      margin: 1.25rem auto;
      text-align: center;
      gap: 0.563rem;
      h2 {
        font-size: 1.25rem;
        font-weight: 600;
        line-height: 1.625rem;
      }
      p {
        font-size: 1rem;
        font-weight: 400;
        color: #475467;
        line-height: 1.3rem;
      }
    }
  }
`;
