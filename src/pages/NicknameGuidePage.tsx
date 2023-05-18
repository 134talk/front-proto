import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'ui';
import * as t from './nicknameGuidePage.style';

export default function NicknameGuidePage() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('mood');
  }, []);

  const handleNext = () => navigate('/nickname/mood');

  return (
    <t.Container>
      <p>나의 이름 짓기</p>
      <section>
        <p>
          원하는 일을 하며 삶을 사랑하는
          <br /> 대화 서비스에 오신 <span>{NAME}님</span>,
          <br /> 안녕하세요!
        </p>
        <p>
          134에서는 <span>{NAME}님</span>의 대화 여행을 위해
          <br /> 신비한 이름을 지어드립니다.
        </p>
      </section>
      <Button text="다음" onClick={handleNext} category="confirm" />
    </t.Container>
  );
}
//FIXME: TEST DATA
const NAME = '유저';
