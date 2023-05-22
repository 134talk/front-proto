import { NavBar } from 'components';
import React from 'react';
import { CHAT_NOTIFY_IMAGE } from 'shared/constants/icons';
import { styled } from 'styled-components';

export default function ChatNotifyScreen() {
  return (
    <Container>
      <NavBar isCenter={true} title="대화방" />
      <p className="guide_text">
        처음 이야기를 시작하실 분은
        <br />
        '땡땡떙'님 입니다.
      </p>
      <img className="notify_image" src={CHAT_NOTIFY_IMAGE} alt="chat_image" />
      <p>
        '떙떙떙'님은
        <br />
        어떤 질문은 만났나요?
        <br />
        당신의 이야기를 들려주세요.
      </p>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.625rem;
  align-items: center;
  p {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.95rem;
    text-align: center;
    &.guide_text {
      padding-top: 2.875rem;
    }
  }
  img {
    &.notify_image {
      width: 15.875rem;
      height: 18.75rem;
    }
  }
`;
