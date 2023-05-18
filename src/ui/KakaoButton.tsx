import { KAKAO_ICON } from 'shared/constants/icons';
import * as t from './kakaoButton.style';

type Props = {
  onClick: () => string;
};

export default function KakaoButton({ onClick }: Props) {
  return (
    <t.Container onClick={onClick}>
      <img src={KAKAO_ICON} alt="카카오 로그인" />
      카카오 로그인
    </t.Container>
  );
}
