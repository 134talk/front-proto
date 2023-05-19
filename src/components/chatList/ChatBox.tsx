import { Chip } from 'ui';
import * as t from './chatBox.style';

export default function ChatBox() {
  return (
    <t.Container>
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
