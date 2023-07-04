import { EmotionData } from 'components';
import { Chip } from 'ui';
import * as t from './chatBox.style';

type Props = {
  roomId: number;
  roomName: string;
  isJoin: boolean;
  emoticons: { emoticon: string; emoticonCount: number }[] | [];
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
      <p className="users">{roomName}</p>
      <div className="emoticons">
        {emoticons.map(({ emoticon, emoticonCount }) => (
          <EmotionData key={emoticon} name={emoticon} count={emoticonCount} />
        ))}
      </div>
    </t.Container>
  );
}
