import { ButtonColumn } from 'components';
import { LOGO_COLOR } from 'shared/constants/icons';
import * as t from './signSelectPage.style';

export default function SignSelectPage() {
  return (
    <t.Container>
      <img src={LOGO_COLOR} alt={'로고'} />
      <ButtonColumn />
    </t.Container>
  );
}
