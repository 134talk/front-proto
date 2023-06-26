import { useNavigate } from 'react-router-dom';
import { NOT_FOUND } from 'shared/constants/icons';
import { Button } from 'ui';
import * as t from './notFoundPage.style';

export default function NotFoundPage() {
  const navigate = useNavigate();
  const navigateHome = () => navigate('/channel');

  return (
    <t.Container>
      <img src={NOT_FOUND} alt="페이지를 찾을 수 없습니다." />
      <p>페이지를 찾을 수 없습니다.</p>
      <Button text="홈으로 가기" category="confirm" onClick={navigateHome} />
    </t.Container>
  );
}
