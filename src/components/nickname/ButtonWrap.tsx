import { Button } from 'ui';
import * as t from './buttonWrap.style';

type Props = {
  disabled: boolean;
  navigatePrev: () => void;
};

export default function ButtonWrap({ disabled, navigatePrev }: Props) {
  return (
    <t.Container>
      <Button onClick={navigatePrev} text="이전" category="cancel" />
      <Button
        type="submit"
        disabled={disabled}
        text="다음"
        category="confirm"
      />
    </t.Container>
  );
}
