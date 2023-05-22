import { NavBar } from 'components';
import React from 'react';
import { styled } from 'styled-components';

export default function ChatNotifyScreen() {
  return (
    <Container>
      <NavBar isCenter={true} title="대화방" />
    </Container>
  );
}

const Container = styled.div``;
