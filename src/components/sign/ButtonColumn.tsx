import { useNavigate } from 'react-router-dom';
import { SignButton } from 'ui';
import * as t from './buttonColumn.style';

export default function ButtonColumn() {
  const navigate = useNavigate();
  const handleNavigate = (link: string) => navigate(link);

  return (
    <t.Container>
      <SignButton
        isAdmin={false}
        onClick={() => handleNavigate('/sign/admin')}
      />
      <SignButton isAdmin={true} onClick={() => handleNavigate('/sign/user')} />
    </t.Container>
  );
}
