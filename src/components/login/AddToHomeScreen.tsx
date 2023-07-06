import { useState } from 'react';
import useA2hs from 'shared/hooks/useA2hs';
import { isInstalled, isIos } from 'shared/utils/deviceDetector';
import { Button, KakaoButton } from 'ui';
import * as t from './addToHomeScreen.style';

type AddToHomeScreenProps = {
  onLogin: () => string;
  onOpen: () => void;
};

export default function AddToHomeScreen({
  onLogin,
  onOpen,
}: AddToHomeScreenProps) {
  const [showKakaoButton, setShowKakaoButton] = useState(false);
  const isIOS = isIos();
  const { deferredPrompt, installApp, clearPrompt } = useA2hs();
  const isIosInstalled = isInstalled();

  const handleClearPromptOnAndroid = () => {
    clearPrompt();
    setShowKakaoButton(true);
  };

  return (
    <t.Container>
      {isIOS && !showKakaoButton && !isIosInstalled ? (
        <div>
          <Button
            onClick={onOpen}
            text="편하게 앱 이용하기"
            category="confirm"
            bgColor="#fff"
            color="#4059DE"
          />
          <button onClick={() => setShowKakaoButton(true)}>
            모바일 웹 이용하기
          </button>
        </div>
      ) : deferredPrompt && !showKakaoButton ? (
        <div>
          <Button
            onClick={installApp}
            text="편하게 앱 이용하기"
            category="confirm"
            bgColor="#fff"
            color="#4059DE"
          />
          <button onClick={handleClearPromptOnAndroid}>
            모바일 웹 이용하기
          </button>
        </div>
      ) : (
        <KakaoButton onClick={onLogin} />
      )}
    </t.Container>
  );
}
