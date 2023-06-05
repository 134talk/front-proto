import { useNavigate } from 'react-router-dom';
import { Button } from 'ui';
import * as t from './buttonColumn.style';

export default function ButtonColumn() {
  const navigate = useNavigate();
  const handleNavigate = (link: string) => navigate(link);

  return (
    <t.Container>
      <Button
        category="confirm"
        text="일반 회원 등록"
        onClick={() => handleNavigate('/sign/user')}
      />
      <Button
        category="cancel"
        text="관리자 회원 등록"
        onClick={() => handleNavigate('/sign/admin')}
      />
    </t.Container>
  );
}
