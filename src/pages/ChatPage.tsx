import IntroductionScreen from 'components/chat/IntroductionScreen';
import WaitingScreen from 'components/chat/WaitingScreen';
import { useState } from 'react';

export default function ChatPage() {
  const [pageType, setPageType] = useState<number>(0);
  console.log('setPageType: ', setPageType);

  return (
    <>
      {pageType === 0 && <WaitingScreen />}
      {pageType === 1 && <IntroductionScreen />}
    </>
  );
}
