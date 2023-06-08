import { EMOTION_ANGRY } from 'shared/constants/icons';
import { Chip } from 'ui';
import * as t from './chatBox.style';

type Props = {
  roomId: number;
  roomName: string;
  isJoin: boolean;
  onClick: () => void;
};

export default function ChatBox({ roomId, roomName, isJoin, onClick }: Props) {
  return (
    <t.Container onClick={onClick}>
      <div className="wrapper">
        <p>{roomId}</p>
        {isJoin && <Chip text="참여가능" />}
      </div>
      <p className="users">{roomName}</p>
      <div className="wrapper">
        <div className="emotions">
          <img src={EMOTION_ANGRY} alt="감정" />
          <p>
            Angry <span> 8</span>
          </p>
        </div>
        <div className="emotions">
          <img src={EMOTION_ANGRY} alt="감정" />
          <p>
            Angry <span> 8</span>
          </p>
        </div>
        <div className="emotions">
          <img src={EMOTION_ANGRY} alt="감정" />
          <p>
            Angry <span> 8</span>
          </p>
        </div>
      </div>
    </t.Container>
  );
}
