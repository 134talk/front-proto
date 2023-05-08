import React from 'react';
import { styled } from 'styled-components';
import isMobile from './deviceDetector';

type Props = {
  children: React.ReactNode;
};

export default function Device({ children }: Props) {
  return (
    <>
      {isMobile ? (
        <Mobile>{children}</Mobile>
      ) : (
        <Web>
          <Phone>
            <WebViewLayout>{children}</WebViewLayout>
          </Phone>
        </Web>
      )}
    </>
  );
}

const Mobile = styled.div`
  display: flex;
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 640px;
  min-width: 280px;
  overflow: hidden;
`;

const Web = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Phone = styled.div`
  width: 426px;
  height: 92%;
  min-height: 750px;
  position: fixed;
`;

const WebViewLayout = styled.div`
  max-width: 375px;
  height: calc(100% - 43px);
  border-radius: 40px;
  overflow: hidden;
  border: 1px solid black;
`;
