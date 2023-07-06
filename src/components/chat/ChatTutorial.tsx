import { TUTORIAL01, TUTORIAL02 } from 'shared/constants/guideImgs';
import isMobile from 'shared/utils/deviceDetector';
import * as t from './chatTutorial.style';

interface ChatTutorialProps {
  onClose?: () => void;
}
export default function ChatTutorial({ onClose }: ChatTutorialProps) {
  const handleClose = () => {
    localStorage.setItem('tutorialKey', 'true');
    onClose();
  };
  return (
    <t.Container onClick={handleClose}>
      {isMobile ? (
        <img className="tutorial1_1_image" src={TUTORIAL01} alt="tutorial1" />
      ) : (
        <img className="tutorial1_image" src={TUTORIAL01} alt="tutorial1" />
      )}
      <img className="tutorial2_image" src={TUTORIAL02} alt="tutorial2" />
    </t.Container>
  );
}
