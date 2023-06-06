import { Button } from 'ui';
import * as t from './signButtonColumn.style';

type Props = {
  disabled: boolean;
  onRegister: () => void;
  onCancel: () => void;
};

export default function SignButtonColumn({
  disabled,
  onRegister,
  onCancel,
}: Props) {
  return (
    <t.Container>
      <Button
        text={'등록'}
        disabled={disabled}
        category={'confirm'}
        onClick={onRegister}
      />
      <Button text={'취소'} category={'cancel'} onClick={onCancel} />
    </t.Container>
  );
}
