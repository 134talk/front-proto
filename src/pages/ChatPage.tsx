import { IntroductionScreen, WaitingScreen } from 'components';
import { useState } from 'react';

export default function ChatPage() {
  const [pageType, setPageType] = useState<number>(1);
  console.log('setPageType: ', setPageType);

  return (
    <>
      {pageType === 0 && <WaitingScreen />}
      {pageType === 1 && <IntroductionScreen />}
    </>
  );
}
