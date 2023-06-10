import { NavBar } from 'components';
import { CHAT_NOTIFY_IMAGE } from 'shared/constants/icons';
import * as t from './chatNotifyScreen.style';

export default function ChatNotifyScreen() {
  // need to set username
  return (
    <t.Container>
      <NavBar isCenter={true} title="대화방" />
      <p>
        처음 이야기를 시작하실 분은
        <br />
        '땡땡떙'님 입니다.
      </p>
      <img src={CHAT_NOTIFY_IMAGE} alt="chat_image" />
      <p>
        '떙떙떙'님은
        <br />
        어떤 질문은 만났나요?
        <br />
        당신의 이야기를 들려주세요.
      </p>
    </t.Container>
  );
}
