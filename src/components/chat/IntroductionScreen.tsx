import { useState } from 'react';
import { styled } from 'styled-components';
import { Button } from 'ui';
import UserList from './UserList';

export default function IntroductionScreen() {
  const [isCheck, setIsCheck] = useState<boolean>(true);
  const handleCheckIn = () => {
    setIsCheck(true);
  };
  return (
    <Container>
      <div className="navbar">
        <h1>대화방</h1>
      </div>
      <div className="intro_wrapper">
        <h2>자기소개</h2>
        <p>서로의 닉네임으로 본인을 소개해주세요.</p>
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
    &.navbar {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 7.875rem;
      width: 100%;
      height: 3.5rem;
      h1 {
        font-size: 1.25rem;
        line-height: 1.625rem;
      }
    }
    &.intro_wrapper {
      display: flex;
      flex-direction: column;
      margin-top: 1.25rem;
      text-align: center;
      gap: 0.563rem;
      h2 {
        font-size: 1.5rem;
        font-weight: bold;
        line-height: 1.95rem;
      }
      p {
        font-size: 1rem;
        line-height: 1.3rem;
      }
    }
  }
`;
