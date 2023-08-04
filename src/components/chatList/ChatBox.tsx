import { EmotionData } from 'components';
import { Chip } from 'ui';
import * as t from './chatBox.style';

type Props = {
  roomId: number;
  roomName: string[];
  isJoin: boolean;
  emoticons: { emotion_name: string; emotion_count: number }[] | [];
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
        {roomName?.map((name, idx) => (
          <span key={idx}>{name} </span>
        ))}
      </p>
      <div className="emoticons">
        {emoticons?.map(({ emotion_name, emotion_count }) => (
          <EmotionData
            key={emotion_name}
            name={emotion_name}
            count={emotion_count}
          />
        ))}
      </div>
    </t.Container>
  );
}
