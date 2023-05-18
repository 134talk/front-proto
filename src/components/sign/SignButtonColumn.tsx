import { Button } from 'ui';
import * as t from './signButtonColumn.style';

type Props = {
  name: string;
  team: string;
  disabled: boolean;
  handleCancel: () => void;
};

export default function SignButtonColumn({ disabled, handleCancel }: Props) {
  return (
    <t.Container>
      <Button text={'등록'} disabled={disabled} category={'confirm'} />
      <Button text={'취소'} category={'cancel'} onClick={handleCancel} />
    </t.Container>
  );
}
