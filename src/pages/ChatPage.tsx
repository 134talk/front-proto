import WaitingScreen from 'components/chat/WaitingScreen';

export default function ChatPage() {

  const [pageType, setPageType] = useState<number>(2);
  console.log('setPageType: ', setPageType);

  return (
    <>
      <WaitingScreen />
    </>
  );
}
