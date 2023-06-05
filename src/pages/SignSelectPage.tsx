import { ButtonColumn } from 'components';
import { LOGO_COLOR } from 'shared/constants/icons';
import * as t from './signSelectPage.style';

export default function SignSelectPage() {
  return (
    <t.Container>
      <img src={LOGO_COLOR} alt={'로고'} />
      <p className="bold">1 3 4</p>
      <p>
        원하는 일을 하고,
        <br />
        삶을 사랑해요.
      </p>
      <ButtonColumn />
    </t.Container>
  );
}
