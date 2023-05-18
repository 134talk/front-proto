import { useNavigate } from 'react-router-dom';
import { Button, ProfileImg } from 'ui';
import * as t from './nicknameResultPage.style';

export default function NicknameResultPage() {
  const navigate = useNavigate();

  const handleConfirm = () => navigate(`/${TEST_CHNNEL_ID}`);

  return (
    <t.Container>
      <ProfileImg size="13.875rem" />
      <p>
        당신의 이름은
        <br />
        <span>{TEST_NICKNAME}</span> <br />
        입니다.
      </p>
      <Button text="확인" category="confirm" onClick={handleConfirm} />
    </t.Container>
  );
}
//FIXME: test data
const TEST_CHNNEL_ID = 1;
const TEST_NICKNAME = '들썩이는 매의 일격';
