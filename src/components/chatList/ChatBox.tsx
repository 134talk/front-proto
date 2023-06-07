import { EMOTION_ANGRY } from 'shared/constants/icons';
import { Chip } from 'ui';
import * as t from './chatBox.style';

type Props = {
  onClick: () => void;
};

export default function ChatBox({ onClick }: Props) {
  return (
    <t.Container onClick={onClick}>
      <div className="wrapper">
        <p>roomid256677방</p>
        <Chip text="참여가능" />
      </div>
      <p className="users">유저일, 유저이, 유저삼, 유저사, 유저오</p>
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
