import { EmotionData } from 'components';
import { Chip } from 'ui';
import * as t from './chatBox.style';

type Props = {
  roomId: number;
  roomName: string[];
  isJoin: boolean;
  emoticons: { emotion: string; emotion_count: number }[] | [];
  onClick: () => void;
};

export default function ChatBox({
  roomId,
  roomName,
  isJoin,
  emoticons,
  onClick,
}: Props) {
  return (
    <t.Container onClick={onClick}>
      <div className="wrapper">
        <p>{roomId}</p>
        {isJoin && <Chip text="참여가능" />}
      </div>
      <p className="users">
        {roomName.map((name, idx) => (
          <span key={idx}>{name} </span>
        ))}
      </p>
      <div className="emoticons">
        {emoticons.map(({ emotion, emotion_count }) => (
          <EmotionData key={emotion} name={emotion} count={emotion_count} />
        ))}
      </div>
    </t.Container>
  );
}
