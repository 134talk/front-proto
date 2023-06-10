import { BaseModal } from 'components';
import useTimer from 'shared/query/useTimer';
import { Button } from 'ui';
import * as t from './checkModal.style';

type Props = {
  chatTime: string;
  onClose: () => void;
};

export default function CheckModal({ chatTime, onClose }: Props) {
  const { mutate } = useTimer();
  const onConfirm = () => {
    mutate({ time: chatTime });
    onClose();
  };

  return (
    <t.Container>
      <BaseModal>
        <p className="title">대화 시간</p>
        <p className="check_text">
          대화 시간을 <span>{chatTime}</span>분으로 설정하셨어요.
          <br />
          이대로 대화를 진행하시겠어요?
        </p>
        <div className="button_wrapper">
          <Button text="취소" category="cancel" onClick={onClose} />
          <Button text="확인" category="confirm" onClick={onConfirm} />
        </div>
      </BaseModal>
    </t.Container>
  );
}
