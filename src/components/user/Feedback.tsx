import { ProfileImg } from 'ui';
import * as t from './feedback.style';

type Props = {
  profile: string;
  nickname: string;
  content: string;
};

export default function Feedback({ profile, nickname, content }: Props) {
  return (
    <t.Container>
      <p>'{nickname}'님이 이렇게 남겨주셨어요.</p>
      <div className="wrapper">
        <ProfileImg image={profile} />
        <p>{content}</p>
      </div>
    </t.Container>
  );
}
