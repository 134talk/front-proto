import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SILHOUETTE } from 'shared/constants/icons';
import useName from 'shared/query/useName';
import { Background, Button } from 'ui';
import * as t from './nicknameGuidePage.style';

export default function NicknameGuidePage() {
  const navigate = useNavigate();
  const name = useName();

  useEffect(() => {
    localStorage.removeItem('mood');
  }, []);

  const handleNext = () => navigate('/nickname/mood');

  return (
    <t.Container>
      <Background />
      <p className="username">{name}님</p>
      <p>134에 오신 것을 환영해요.</p>
      <section>
        <p>
          서로를 더 잘 이해하고,
          <br /> 나의 또다른 면을 발견할 수 있는
          <br /> <span>대화여행</span>을 떠날거에요.
        </p>
        <br />
        <p>
          새로운 여정을 축하하며,
          <br /> 나를 또다르게 표현할 수 있는
          <br /> 인디언식 이름을 지어볼까요?
        </p>
      </section>
      <img src={SILHOUETTE} alt="캐릭터" />
      <p className="bold_white">다음 3가지 질문에 답을 골라보세요.</p>
      <Button text="다음" onClick={handleNext} category="cancel" />
    </t.Container>
  );
}
