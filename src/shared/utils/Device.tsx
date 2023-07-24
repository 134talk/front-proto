import React from 'react';
import { use100vh } from 'react-div-100vh';
import { INDICATOR, PHONE_MOCKUP, STATUS_BAR } from 'shared/constants/icons';
import { styled } from 'styled-components';
import isMobile from './deviceDetector';

type Props = {
  children: React.ReactNode;
};

export default function Device({ children }: Props) {
  const now = new Date().toLocaleTimeString('ko-KR', {
    minute: 'numeric',
    hour: 'numeric',
  });
  const realtime = now.slice(2);
  const mobileHeight = use100vh();

  return (
    <>
      {isMobile ? (
        <Mobile height={mobileHeight}>{children}</Mobile>
      ) : (
        <Web>
          <Phone>
            <WebViewLayout>
              <StatusBar>
                <p className="real_time_text">{realtime}</p>
                <img
                  className="status_bar_image"
                  src={STATUS_BAR}
                  alt="status_bar"
                />
              </StatusBar>
              {children}
              <IndicatorBar>
                <img
                  className="indicator_image"
                  src={INDICATOR}
                  alt="indicator"
                />
              </IndicatorBar>
            </WebViewLayout>
          </Phone>
        </Web>
      )}
    </>
  );
}

const Mobile = styled.div<{ height: number }>`
  margin: 0 auto;
  width: 100%;
  max-width: 640px;
  min-width: 280px;
  height: ${({ height }) => `${height}px`};
  max-height: ${({ height }) => `${height}px`};
  overflow: hidden;
`;

const Web = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url('/assets/background.svg');
  background-size: cover;
  background-repeat: no-repeat;
`;

const Phone = styled.div`
  width: 419px;
  height: 852px;
  min-height: 750px;
  position: fixed;
  right: 50%;
  top: 50%;
  transform: translate(50%, -50%);
  background-image: url(${PHONE_MOCKUP});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  @media screen and (min-width: 1120px) {
    right: 10%;
    top: 50%;
    transform: translate(0%, -50%);
  }
`;

const StatusBar = styled.div`
  width: calc(100% + 1.25rem * 2);
  height: 2.75rem;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: row;
  z-index: 9999;
  position: relative;
  margin: 0 1.25rem 0 -1.25rem;
  padding: 0 40px;
  p {
    &.real_time_text {
      width: 3.375rem;
      text-align: center;
      font-size: 0.875rem;
      font-weight: bold;
    }
  }
  img {
    status_bar_image {
      width: 4.166rem;
      height: 0.709rem;
    }
  }
`;

const WebViewLayout = styled.div`
  max-width: 375px;
  height: calc(100% - 40px);
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 40px;
  overflow: hidden;
  background: #ffffff;
`;

const IndicatorBar = styled.div`
  height: 2.125rem;
  position: absolute;
  bottom: 0;
  left: 32%;
  margin: 0 auto;
  z-index: 999;
  img {
    &.indicator_image {
      margin-top: 1.313rem;
    }
  }
`;
