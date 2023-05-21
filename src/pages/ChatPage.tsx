import {
  ChatScreen,
  IntroductionScreen,
  KeywordScreen,
  SelectionScreen,
  WaitingScreen,
} from 'components';
import { useState } from 'react';

export default function ChatPage() {
  const [pageType, setPageType] = useState<number>(4);
  console.log('setPageType: ', setPageType);
  return (
    <>
      {pageType === 0 && <WaitingScreen />}
      {pageType === 1 && <IntroductionScreen />}
      {pageType === 2 && <KeywordScreen />}
      {pageType === 3 && <SelectionScreen />}
      {pageType === 4 && <ChatScreen />}
    </>
  );
}
