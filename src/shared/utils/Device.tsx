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
  margin: 0 auto;
  padding: 0;
  width: 100%;
  max-width: 640px;
  min-width: 280px;
  overflow: hidden;
  padding: 0 1.25rem;
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
  right: 50%;
  top: 50%;
  transform: translate(50%, -50%);
  @media screen and (min-width: 1120px) {
    right: 10%;
    top: 50%;
    transform: translate(0%, -50%);
  }
`;

const WebViewLayout = styled.div`
  max-width: 375px;
  height: 50.75rem;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 40px;
  overflow: hidden;
  border: 1px solid black;
  padding: 2.75rem 1.25rem 0 1.25rem;
`;
