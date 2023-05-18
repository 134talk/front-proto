import * as t from './title.style';

type Props = {
  text: string;
  icon: string;
};

export default function Title({ text, icon }: Props) {
  return (
    <t.Container>
      <img src={icon} alt="일반 회원 등록" />
      <span>{text}</span>
    </t.Container>
  );
}
