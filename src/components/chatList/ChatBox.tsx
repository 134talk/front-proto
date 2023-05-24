import { Chip } from 'ui';
import * as t from './chatBox.style';

type Props = {
  onClick: () => void;
};

export default function ChatBox({ onClick }: Props) {
  return (
    <t.Container onClick={onClick}>
      <div className="wrapper">
        <p>참여 인원 수 (3)</p>
        <Chip text="참여가능" />
      </div>
      <div className="wrapper">
        <div>{/* TODO: 감정 아이콘 추가 필요 */}Angry (8)</div>
        <div>{/* TODO: 감정 아이콘 추가 필요 */}Angry (8)</div>
        <div>{/* TODO: 감정 아이콘 추가 필요 */}Angry (8)</div>
      </div>
    </t.Container>
  );
}
